<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'sam',
            'email' => 'sam@gmail.com',
            'password' => Hash::make('0000'),
        ]);
    }
}
