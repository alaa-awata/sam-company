<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [
                'name_en' => 'Khaled Abdel Raouf',
                'name_ar' => 'خالد عبد الرؤوف',
                'position_en' => 'Founder & CEO',
                'position_ar' => 'المؤسس والرئيس التنفيذي',
                'image_url' => 'https://i.pinimg.com/736x/c9/7c/ed/c97cedb410e3f3e2c78d2a11a0e26356.jpg',
                'order' => 1,
                'active' => true
            ],
            [
                'name_en' => 'Hatem Al-Mahbani ',
                'name_ar' => '  حاتم المهباني' ,
                'position_en' => 'CTO',
                'position_ar' => 'المدير التقني',
                'image_url' => 'https://i.pinimg.com/736x/eb/35/37/eb35371ed9a7f5386cdae3cc949eeed1.jpg',
                'order' => 2,
                'active' => true
            ],
            [
                'name_en' => 'Jane Doe',
                'name_ar' => 'جين دو',
                'position_en' => 'Marketing Manager',
                'position_ar' => 'مديرة التسويق',
                'image_url' => 'https://i.pinimg.com/736x/90/1e/9c/901e9c722dfc110924863b61ae7d64a2.jpg',
                'order' => 3,
                'active' => true
            ],
        ];

        foreach ($members as $member) {
            TeamMember::create($member);
        }
    }
}
