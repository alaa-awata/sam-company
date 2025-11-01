<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();
        
        // For now, we'll allow any authenticated user to access admin routes
        // In a real application, you might want to check for specific admin roles
        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        
        return $next($request);
    }
}
