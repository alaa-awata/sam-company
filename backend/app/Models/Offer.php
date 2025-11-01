<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $fillable = [
        'title_en',
        'title_ar',
        'slug',
        'definition_en',
        'definition_ar',
        'features_en',
        'features_ar',
        'price_month',
        'price_year',
        'tier',
        'active',
    ];

    protected $casts = [
        'features_en' => 'array',
        'features_ar' => 'array',
        'active' => 'boolean',
        'price_month' => 'decimal:2',
        'price_year' => 'decimal:2',
    ];
}
