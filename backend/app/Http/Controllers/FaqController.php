<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
public function index(Request $request)
{
    $lang = $request->get('lang', 'en');

    // 👇 Add this: if admin=true, return full data
    if ($request->boolean('admin')) {
        return response()->json(Faq::orderBy('order')->get());
    }

    $faqs = Faq::active()->ordered()->get()->map(function ($faq) use ($lang) {
        return [
            'id' => $faq->id,
            'question' => $lang === 'ar' ? $faq->question_ar : $faq->question_en,
            'answer'   => $lang === 'ar' ? $faq->answer_ar   : $faq->answer_en,
        ];
    });

    return response()->json($faqs);
}


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'question_en' => 'required|string|max:500',
            'question_ar' => 'required|string|max:500',
            'answer_en' => 'required|string|max:2000',
            'answer_ar' => 'required|string|max:2000',
            'order' => 'nullable|integer|min:0',
            'active' => 'nullable|boolean',
        ]);

        $faq = Faq::create($data);
        return response()->json($faq, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function show(Faq $faq)
    {
        return response()->json($faq);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Faq $faq)
    {
        $data = $request->validate([
            'question_en' => 'sometimes|required|string|max:500',
            'question_ar' => 'sometimes|required|string|max:500',
            'answer_en' => 'sometimes|required|string|max:2000',
            'answer_ar' => 'sometimes|required|string|max:2000',
            'order' => 'nullable|integer|min:0',
            'active' => 'nullable|boolean',
        ]);

        $faq->update($data);
        return response()->json($faq);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function destroy(Faq $faq)
    {
        $faq->delete();
        return response()->json(['message' => 'FAQ deleted successfully']);
    }
}
