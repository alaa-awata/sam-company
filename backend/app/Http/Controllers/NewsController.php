<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class NewsController extends Controller
{
    public function index()
    {
        // return active, ordered news
        $news = News::active()->ordered()->get();
        return response()->json($news);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title_en' => 'required|string|max:500',
            'title_ar' => 'required|string|max:500',
            'content_en' => 'required|string|max:5000',
            'content_ar' => 'required|string|max:5000',
            'image' => 'required|string|max:1000',
            'date' => 'required|string|max:50',
            'time' => 'required|string|max:50',
            'slug' => 'nullable|string|max:500|unique:news,slug',
            'order' => 'nullable|integer|min:0',
            'active' => 'nullable|boolean',
        ]);

        $data['slug'] = $data['slug'] ?? Str::slug($data['title_en']);
        $news = News::create($data);

        return response()->json($news, 201);
    }

    public function show(News $news)
    {
        return response()->json($news);
    }

    public function update(Request $request, News $news)
    {
        $data = $request->validate([
            'title_en' => 'sometimes|required|string|max:500',
            'title_ar' => 'sometimes|required|string|max:500',
            'content_en' => 'sometimes|required|string|max:5000',
            'content_ar' => 'sometimes|required|string|max:5000',
            'image' => 'sometimes|required|string|max:1000',
            'date' => 'sometimes|required|string|max:50',
            'time' => 'sometimes|required|string|max:50',
            'slug' => ['sometimes','string','max:500', Rule::unique('news','slug')->ignore($news->id)],
            'order' => 'nullable|integer|min:0',
            'active' => 'nullable|boolean',
        ]);

        if (isset($data['title_en']) && empty($data['slug'])) {
            $data['slug'] = Str::slug($data['title_en']);
        }

        $news->update($data);

        return response()->json($news);
    }

    public function destroy(News $news)
    {
        $news->delete();
        return response()->json(['message' => 'News article deleted successfully']);
    }
}
