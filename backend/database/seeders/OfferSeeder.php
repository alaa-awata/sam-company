<?php
namespace Database\Seeders; 
use App\Models\Offer;
use Illuminate\Database\Seeder;

class OfferSeeder extends Seeder
{
    public function run(): void
    {
        $offers = [
            [
                'title_en' => 'Starter Pack',
                'title_ar' => 'حزمة المبتدئين',
                'slug' => 'starter-pack',
                'definition_en' => 'Basic internet package for home users.',
                'definition_ar' => 'حزمة الإنترنت الأساسية للمستخدمين المنزليين.',
                'features_en' => ['Up to 50 Mbps', 'Unlimited browsing', '24/7 support'],
                'features_ar' => ['سرعة تصل إلى 50 ميجابت', 'تصفح غير محدود', 'دعم على مدار الساعة'],
                'price_month' => 20.00,
                'price_year' => 200.00,
                'tier' => 'starter',
                'active' => true,
            ],
            [
                'title_en' => 'Pro Pack',
                'title_ar' => 'حزمة المحترفين',
                'slug' => 'pro-pack',
                'definition_en' => 'High-speed package for power users.',
                'definition_ar' => 'حزمة عالية السرعة للمستخدمين المتقدمين.',
                'features_en' => ['Up to 200 Mbps', 'Unlimited browsing', 'Priority support'],
                'features_ar' => ['سرعة تصل إلى 200 ميجابت', 'تصفح غير محدود', 'دعم أولوية'],
                'price_month' => 50.00,
                'price_year' => 500.00,
                'tier' => 'pro',
                'active' => true,
            ],
            [
                'title_en' => 'Lite Pack',
                'title_ar' => 'حزمة لايت',
                'slug' => 'lite-pack',
                'definition_en' => 'Affordable package for casual users.',
                'definition_ar' => 'حزمة بأسعار معقولة للمستخدمين العاديين.',
                'features_en' => ['Up to 20 Mbps', 'Limited data', 'Email support'],
                'features_ar' => ['سرعة تصل إلى 20 ميجابت', 'بيانات محدودة', 'دعم عبر البريد الإلكتروني'],
                'price_month' => 10.00,
                'price_year' => 100.00,
                'tier' => 'lite',
                'active' => true,
            ],
            [
                'title_en' => 'Family Pack',
                'title_ar' => 'حزمة العائلة',
                'slug' => 'family-pack',
                'definition_en' => 'Perfect for multiple users at home.',
                'definition_ar' => 'مثالي لعدة مستخدمين في المنزل.',
                'features_en' => ['Up to 150 Mbps', 'Unlimited devices', '24/7 support'],
                'features_ar' => ['سرعة تصل إلى 150 ميجابت', 'أجهزة غير محدودة', 'دعم على مدار الساعة'],
                'price_month' => 40.00,
                'price_year' => 400.00,
                'tier' => 'none',
                'active' => true,
            ],
            [
                'title_en' => 'Business Pack',
                'title_ar' => 'حزمة الأعمال',
                'slug' => 'business-pack',
                'definition_en' => 'Reliable internet for small businesses.',
                'definition_ar' => 'إنترنت موثوق للأعمال الصغيرة.',
                'features_en' => ['Up to 300 Mbps', 'Dedicated support', 'Static IP'],
                'features_ar' => ['سرعة تصل إلى 300 ميجابت', 'دعم مخصص', 'IP ثابت'],
                'price_month' => 80.00,
                'price_year' => 800.00,
                'tier' => 'pro',
                'active' => true,
            ],
        ];

        foreach ($offers as $offer) {
            Offer::create($offer);
        }
    }
}
