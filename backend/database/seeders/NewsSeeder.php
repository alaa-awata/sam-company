<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $news = [
            [
                'slug' => 'sam-expands-fiber',
                'title_en' => 'Sam Expands Fiber Network to New Cities',
                'title_ar' => 'سام توسع شبكة الألياف إلى مدن جديدة',
                'content_en' => 'Sam is expanding its fiber backbone to reach new cities, improving capacity and reducing latency. Detailed rollout plans, timelines and expected customer benefits are provided in this article.',
                'content_ar' => 'تعمل شركة سام على توسيع شبكتها من الألياف البصرية لتصل إلى مدن جديدة، مما يحسن السعة ويقلل من زمن الوصول. تتضمن هذه المقالة تفاصيل الخطط والجداول الزمنية والفوائد المتوقعة للعملاء.',
                'image' => 'https://i.pinimg.com/736x/7b/5f/0a/7b5f0a8cadef17cfe1108515bab582d4.jpg',
                'date' => 'Sep 17, 2024',
                'time' => '7 min read',
                'order' => 1,
                'active' => true,
            ],
            [
                'slug' => 'launch-new-plans',
                'title_en' => 'Launch of New High-Speed Internet Plans',
                'title_ar' => 'إطلاق خطط إنترنت جديدة عالية السرعة',
                'content_en' => 'We introduced a set of new plans optimized for families and remote workers — includes details on speeds, pricing, and promotional offers.',
                'content_ar' => 'قمنا بإطلاق مجموعة من الخطط الجديدة المصممة خصيصاً للعائلات والعاملين عن بُعد — وتشمل تفاصيل السرعات والأسعار والعروض الترويجية.',
                'image' => 'https://i.pinimg.com/736x/6e/11/2a/6e112add458c8282b9901af85e4a29f0.jpg',
                'date' => 'Sep 20, 2024',
                'time' => '10 min read',
                'order' => 2,
                'active' => true,
            ],
            [
                'slug' => 'iptv-services',
                'title_en' => 'IPTV Services Now Available Across Syria',
                'title_ar' => 'خدمات IPTV متاحة الآن في جميع أنحاء سوريا',
                'content_en' => 'IPTV service is now available with a modern interface, content partnerships, and low-latency streaming. This post explains packages and compatibility.',
                'content_ar' => 'خدمة IPTV أصبحت متاحة الآن بواجهة حديثة وشراكات محتوى وبث منخفض التأخير. توضح هذه المقالة الباقات والتوافق.',
                'image' => 'https://i.pinimg.com/736x/91/60/61/9160610368326ee277e48fa711679026.jpg',
                'date' => 'Sep 24, 2024',
                'time' => '3 min read',
                'order' => 3,
                'active' => true,
            ],
            [
                'slug' => 'sam-green-initiative',
                'title_en' => 'Sam Launches Green Data Center Initiative',
                'title_ar' => 'سام تطلق مبادرة مركز البيانات الخضراء',
                'content_en' => 'Sam has announced a new initiative to reduce the environmental impact of its operations by introducing energy-efficient data centers powered by renewable energy.',
                'content_ar' => 'أعلنت شركة سام عن مبادرة جديدة لتقليل الأثر البيئي لعملياتها من خلال إنشاء مراكز بيانات موفرة للطاقة تعمل بالطاقة المتجددة.',
                'image' => 'https://i.pinimg.com/736x/85/21/4f/85214f816c6d22e2b54112d09af2768f.jpg',
                'date' => 'Oct 02, 2024',
                'time' => '6 min read',
                'order' => 4,
                'active' => true,
            ],
        ];

        foreach ($news as $item) {
            News::create($item);
        }
    }
}
