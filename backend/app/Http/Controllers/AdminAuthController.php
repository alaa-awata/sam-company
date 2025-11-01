<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Optionally check a role/flag for admin:
        // if (!$user->is_admin) { return response()->json(['message'=>'Forbidden'],403); }

        $token = $user->createToken('admin-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $user->only(['id','name','email']),
        ]);
    }
    public function dashboard(Request $request)
{
    $user = $request->user();

    return response()->json([
        'user' => $user,
        'stats' => [
            'server_time' => now()->toDateTimeString(),
            'users_count' => \App\Models\User::count(),
        ],
    ]);
}


    public function me(Request $request)
    {
        return response()->json($request->user());
    }

    public function logout(Request $request)
    {
        // revoke current token
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out']);
    }
}
