<?php

namespace App\Http\Controllers;

use App\Models\BlogComment;
use App\Models\BlogPost;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(): JsonResponse
    {
        $posts = BlogPost::with('comments')->latest()->get()->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'content' => $post->content,
                'coverImg' => $post->cover_img,
                'createdAt' => $post->created_at->toISOString(),
                'view' => $post->view,
                'share' => $post->share,
                'category' => $post->category,
                'featured' => (bool)$post->featured,
                'author' => [
                    'name' => $post->author_name,
                    'avatar' => $post->author_avatar ?: '/src/assets/images/profile/user-1.jpg',
                ],
                'comments' => $post->comments->map(function ($c) {
                    return [
                        'id' => $c->id,
                        'profile' => [
                            'name' => $c->name,
                            'avatar' => $c->avatar ?: '/src/assets/images/profile/user-2.jpg',
                        ],
                        'time' => $c->created_at->toISOString(),
                        'comment' => $c->comment,
                        'replies' => [],
                    ];
                }),
            ];
        });

        return response()->json($posts);
    }

    public function show($id): JsonResponse
    {
        $post = BlogPost::with('comments')->findOrFail($id);
        
        $post->increment('view');

        return response()->json([
            'id' => $post->id,
            'title' => $post->title,
            'content' => $post->content,
            'coverImg' => $post->cover_img,
            'createdAt' => $post->created_at->toISOString(),
            'view' => $post->view,
            'share' => $post->share,
            'category' => $post->category,
            'featured' => (bool)$post->featured,
            'author' => [
                'name' => $post->author_name,
                'avatar' => $post->author_avatar ?: '/src/assets/images/profile/user-1.jpg',
            ],
            'comments' => $post->comments->map(function ($c) {
                return [
                    'id' => $c->id,
                    'profile' => [
                        'name' => $c->name,
                        'avatar' => $c->avatar ?: '/src/assets/images/profile/user-2.jpg',
                    ],
                    'time' => $c->created_at->toISOString(),
                    'comment' => $c->comment,
                    'replies' => [],
                ];
            }),
        ]);
    }

    public function addComment(Request $request, $id): JsonResponse
    {
        $post = BlogPost::findOrFail($id);

        $validated = $request->validate([
            'comment' => ['required', 'string'],
            'name' => ['nullable', 'string'],
        ]);

        $comment = $post->comments()->create([
            'name' => $validated['name'] ?? (auth()->user()?->name ?? 'Guest User'),
            'avatar' => auth()->user()?->avatar ?? '/src/assets/images/profile/user-1.jpg',
            'comment' => $validated['comment'],
        ]);

        return response()->json([
            'id' => $comment->id,
            'profile' => [
                'name' => $comment->name,
                'avatar' => $comment->avatar,
            ],
            'time' => $comment->created_at->toISOString(),
            'comment' => $comment->comment,
            'replies' => [],
        ], 201);
    }
}