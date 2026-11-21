<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index(): JsonResponse
    {
        $tickets = Ticket::where('deleted', false)
            ->latest('date')
            ->get()
            ->map(function ($ticket) {
                return [
                    'Id' => $ticket->id,
                    'ticketTitle' => $ticket->ticket_title,
                    'ticketDescription' => $ticket->ticket_description,
                    'Status' => $ticket->status,
                    'Label' => $ticket->label,
                    'thumb' => $ticket->thumb ?: '/src/assets/images/profile/user-1.jpg',
                    'AgentName' => $ticket->agent_name,
                    'Date' => $ticket->date ? $ticket->date->toISOString() : $ticket->created_at->toISOString(),
                    'deleted' => (bool)$ticket->deleted,
                ];
            });

        return response()->json($tickets);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'ticketTitle' => ['required', 'string', 'max:255'],
            'ticketDescription' => ['required', 'string'],
            'Status' => ['nullable', 'string'],
            'Label' => ['nullable', 'string'],
            'AgentName' => ['nullable', 'string'],
        ]);

        $ticket = Ticket::create([
            'user_id' => auth()->id(),
            'ticket_title' => $validated['ticketTitle'],
            'ticket_description' => $validated['ticketDescription'],
            'status' => $validated['Status'] ?? 'Open',
            'label' => $validated['Label'] ?? 'success',
            'thumb' => '/src/assets/images/profile/user-1.jpg',
            'agent_name' => $validated['AgentName'] ?? 'Mathew',
            'date' => now(),
            'deleted' => false,
        ]);

        return response()->json([
            'Id' => $ticket->id,
            'ticketTitle' => $ticket->ticket_title,
            'ticketDescription' => $ticket->ticket_description,
            'Status' => $ticket->status,
            'Label' => $ticket->label,
            'thumb' => $ticket->thumb,
            'AgentName' => $ticket->agent_name,
            'Date' => $ticket->date->toISOString(),
            'deleted' => false,
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $ticket = Ticket::findOrFail($id);
        return response()->json([
            'Id' => $ticket->id,
            'ticketTitle' => $ticket->ticket_title,
            'ticketDescription' => $ticket->ticket_description,
            'Status' => $ticket->status,
            'Label' => $ticket->label,
            'thumb' => $ticket->thumb ?: '/src/assets/images/profile/user-1.jpg',
            'AgentName' => $ticket->agent_name,
            'Date' => $ticket->date ? $ticket->date->toISOString() : $ticket->created_at->toISOString(),
            'deleted' => (bool)$ticket->deleted,
        ]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $ticket = Ticket::findOrFail($id);

        $validated = $request->validate([
            'ticketTitle' => ['sometimes', 'string'],
            'ticketDescription' => ['sometimes', 'string'],
            'Status' => ['sometimes', 'string'],
            'Label' => ['sometimes', 'string'],
            'AgentName' => ['sometimes', 'string'],
        ]);

        $updateData = [];
        if (isset($validated['ticketTitle'])) $updateData['ticket_title'] = $validated['ticketTitle'];
        if (isset($validated['ticketDescription'])) $updateData['ticket_description'] = $validated['ticketDescription'];
        if (isset($validated['Status'])) $updateData['status'] = $validated['Status'];
        if (isset($validated['Label'])) $updateData['label'] = $validated['Label'];
        if (isset($validated['AgentName'])) $updateData['agent_name'] = $validated['AgentName'];

        $ticket->update($updateData);

        return response()->json(['message' => 'Ticket updated successfully']);
    }

    public function destroy($id): JsonResponse
    {
        $ticket = Ticket::findOrFail($id);
        $ticket->update(['deleted' => true]);

        return response()->json(['message' => 'Ticket deleted successfully']);
    }
}