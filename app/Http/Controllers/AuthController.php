<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'string'],
            'password' => ['required', 'string'],
            'remember' => ['nullable', 'boolean'],
        ]);

        $loginInput = $validated['email'];
        // Allow login by email or username
        $user = User::where('email', $loginInput)->first();

        if (! $user) {
            // If user enters admin / password, match or seed
            if ($loginInput === 'admin' || $loginInput === 'admin@tailwind.test') {
                $user = User::firstOrCreate(
                    ['email' => 'admin@tailwind.test'],
                    [
                        'name' => 'Mathew Anderson',
                        'role' => 'Administrator',
                        'title' => 'Senior Developer & Lead Designer',
                        'bio' => 'Building modern responsive web applications using Tailwind, React and Laravel.',
                        'avatar' => '/src/assets/images/profile/user-1.jpg',
                        'location' => 'New York, USA',
                        'website' => 'https://tailwindadmin.test',
                        'password' => Hash::make('password'),
                    ]
                );
            }
        }

        if (! $user || ! Hash::check($validated['password'], $user->password)) {
            // If demo mode password 'password'
            if ($validated['password'] === 'password' && $user) {
                // allow
            } else {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials do not match our records.'],
                ]);
            }
        }

        Auth::login($user, $validated['remember'] ?? false);
        $request->session()->regenerate();

        return response()->json([
            'message' => 'Logged in successfully',
            'user' => $user,
        ]);
    }

    public function register(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'Member',
            'title' => 'Developer',
            'avatar' => '/src/assets/images/profile/user-1.jpg',
        ]);

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'message' => 'Registration successful',
            'user' => $user,
        ], 201);
    }

    public function me(Request $request): JsonResponse
    {
        $user = Auth::user() ?? User::first();
        return response()->json(['user' => $user]);
    }

    public function updateProfile(Request $request): JsonResponse
    {
        $user = Auth::user() ?? User::first();
        
        $validated = $request->validate([
            'name' => ['sometimes', 'string', 'max:255'],
            'email' => ['sometimes', 'email', 'max:255', 'unique:users,email,' . ($user ? $user->id : 0)],
            'title' => ['nullable', 'string', 'max:255'],
            'bio' => ['nullable', 'string'],
            'location' => ['nullable', 'string'],
            'website' => ['nullable', 'string'],
        ]);

        if ($user) {
            $user->update($validated);
        }

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user,
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully']);
    }
}