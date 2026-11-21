<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index(): JsonResponse
    {
        $notes = Note::where('deleted', false)
            ->latest('datef')
            ->get()
            ->map(function ($note) {
                return [
                    'id' => $note->id,
                    'title' => $note->title,
                    'color' => $note->color,
                    'datef' => $note->datef ? $note->datef->toISOString() : $note->created_at->toISOString(),
                    'deleted' => (bool)$note->deleted,
                ];
            });

        return response()->json($notes);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string'],
            'color' => ['nullable', 'string'],
        ]);

        $note = Note::create([
            'user_id' => auth()->id(),
            'title' => $validated['title'],
            'color' => $validated['color'] ?? 'primary',
            'datef' => now(),
            'deleted' => false,
        ]);

        return response()->json([
            'id' => $note->id,
            'title' => $note->title,
            'color' => $note->color,
            'datef' => $note->datef->toISOString(),
            'deleted' => false,
        ], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $note = Note::findOrFail($id);

        $validated = $request->validate([
            'title' => ['sometimes', 'string'],
            'color' => ['sometimes', 'string'],
        ]);

        $note->update($validated);

        return response()->json([
            'id' => $note->id,
            'title' => $note->title,
            'color' => $note->color,
            'datef' => $note->datef ? $note->datef->toISOString() : $note->updated_at->toISOString(),
            'deleted' => (bool)$note->deleted,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $note = Note::findOrFail($id);
        $note->update(['deleted' => true]);

        return response()->json(['message' => 'Note deleted successfully']);
    }
}