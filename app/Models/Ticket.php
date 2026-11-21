<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'ticket_title',
        'ticket_description',
        'status',
        'label',
        'thumb',
        'agent_name',
        'date',
        'deleted',
    ];

    protected $casts = [
        'date' => 'datetime',
        'deleted' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}