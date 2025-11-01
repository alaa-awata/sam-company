<?php


namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->get('lang', 'en');
        
        if ($request->boolean('admin')) {
            return response()->json(TeamMember::ordered()->get());
        }

        return response()->json(
            TeamMember::active()
                ->ordered()
                ->get()
                ->map(function ($member) use ($lang) {
                    return [
                        'id' => $member->id,
                        'name' => $lang === 'ar' ? $member->name_ar : $member->name_en,
                        'position' => $lang === 'ar' ? $member->position_ar : $member->position_en,
                        'image_url' => $member->image_url
                    ];
                })
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_ar' => 'required|string|max:255',
            'position_en' => 'required|string|max:255',
            'position_ar' => 'required|string|max:255',
            'image_url' => 'required|url|max:1000',
            'order' => 'nullable|integer|min:0',
            'active' => 'nullable|boolean'
        ]);

        $member = TeamMember::create($data);
        return response()->json($member, 201);
    }

    public function update(Request $request, TeamMember $team)
    {
        $data = $request->validate([
            'name_en' => 'sometimes|required|string|max:255',
            'name_ar' => 'sometimes|required|string|max:255',
            'position_en' => 'sometimes|required|string|max:255',
            'position_ar' => 'sometimes|required|string|max:255',
            'image_url' => 'sometimes|required|url|max:1000',
            'order' => 'nullable|integer|min:0',
            'active' => 'nullable|boolean'
        ]);

        $team->update($data);
        return response()->json($team);
    }

    public function destroy(TeamMember $team)
    {
        $team->delete();
        return response()->json(null, 204);
    }
}