<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'time',
        'desc',
        'is_sale',
        'border_color',
        'is_last_item',
    ];

    protected $casts = [
        'is_sale' => 'boolean',
        'is_last_item' => 'boolean',
    ];
}