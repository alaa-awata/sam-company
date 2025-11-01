<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        $faqs = [
            [
                'question_en' => 'What payment methods do you accept?',
                'question_ar' => 'ما هي طرق الدفع المقبولة؟',
                'answer_en' => 'We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely through our payment gateway.',
                'answer_ar' => 'نقبل جميع بطاقات الائتمان الرئيسية وباي بال والتحويلات المصرفية. تتم معالجة الدفع بشكل آمن من خلال بوابة الدفع لدينا.',
                'order' => 1,
                'active' => true
            ],
            [
                'question_en' => 'How can I contact customer support?',
                'question_ar' => 'كيف يمكنني الاتصال بدعم العملاء؟',
                'answer_en' => 'Our customer support team is available 24/7. You can reach us through email, phone, or live chat on our website.',
                'answer_ar' => 'فريق دعم العملاء متاح على مدار الساعة. يمكنك الوصول إلينا عبر البريد الإلكتروني أو الهاتف أو الدردشة المباشرة على موقعنا.',
                'order' => 2,
                'active' => true
            ],
            [
                'question_en' => 'What is your refund policy?',
                'question_ar' => 'ما هي سياسة الاسترداد الخاصة بكم؟',
                'answer_en' => 'We offer a 30-day money-back guarantee for all our services. Contact our support team to process your refund.',
                'answer_ar' => 'نقدم ضمان استرداد الأموال لمدة 30 يومًا لجميع خدماتنا. اتصل بفريق الدعم لدينا لمعالجة عملية استرداد الأموال.',
                'order' => 3,
                'active' => true
            ]
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
