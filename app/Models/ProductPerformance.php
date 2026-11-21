<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPerformance extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'designation',
        'project',
        'priority',
        'color',
        'bgcolor',
        'budget',
    ];
}