<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'cover_img',
        'category',
        'view',
        'share',
        'featured',
        'author_name',
        'author_avatar',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'view' => 'integer',
        'share' => 'integer',
    ];

    public function comments()
    {
        return $this->hasMany(BlogComment::class);
    }
}