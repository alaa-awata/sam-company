<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class OfferController extends Controller
{
    public function index()
    {
        return response()->json(Offer::orderBy('tier')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title_en' => 'required|string|max:255',
            'title_ar' => 'required|string|max:255',
            'slug' => 'nullable|string|unique:offers,slug',
            'definition_en' => 'nullable|string',
            'definition_ar' => 'nullable|string',
            'features_en' => 'nullable|array',
            'features_en.*' => 'string',
            'features_ar' => 'nullable|array',
            'features_ar.*' => 'string',
            'price_month' => 'nullable|numeric',
            'price_year' => 'nullable|numeric',
            'tier' => ['nullable', Rule::in(['pro','starter','lite','none'])],
            'active' => 'nullable|boolean',
        ]);

        $data['slug'] = $data['slug'] ?? Str::slug($data['title_en']);
        $offer = Offer::create($data);

        return response()->json($offer, 201);
    }

    public function update(Request $request, Offer $offer)
    {
        $data = $request->validate([
            'title_en' => 'required|string|max:255',
            'title_ar' => 'required|string|max:255',
            'slug' => ['nullable','string', Rule::unique('offers','slug')->ignore($offer->id)],
            'definition_en' => 'nullable|string',
            'definition_ar' => 'nullable|string',
            'features_en' => 'nullable|array',
            'features_en.*' => 'string',
            'features_ar' => 'nullable|array',
            'features_ar.*' => 'string',
            'price_month' => 'nullable|numeric',
            'price_year' => 'nullable|numeric',
            'tier' => ['nullable', Rule::in(['pro','starter','lite','none'])],
            'active' => 'nullable|boolean',
        ]);

        $offer->update($data);
        return response()->json($offer);
    }

    public function show(Offer $offer)
    {
        return response()->json($offer);
    }

    public function destroy(Offer $offer)
    {
        $offer->delete();
        return response()->json(null, 204);
    }
}
