<?php

namespace Database\Seeders;

use App\Models\BlogComment;
use App\Models\BlogPost;
use App\Models\Note;
use App\Models\ProductPerformance;
use App\Models\Ticket;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        // Default User
        $user = User::updateOrCreate(
            ['email' => 'admin@tailwind.test'],
            [
                'name' => 'Mathew Anderson',
                'role' => 'Administrator',
                'title' => 'Senior Developer & Lead Designer',
                'bio' => 'Building modern responsive web applications using Tailwind, React and Laravel.',
                'avatar' => '/src/assets/images/profile/user-1.jpg',
                'location' => 'New York, USA',
                'website' => 'https://tailwindadmin.test',
                'password' => Hash::make('password'),
            ]
        );

        // Notes Data
        Note::truncate();
        Note::create([
            'user_id' => $user->id,
            'title' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'color' => 'primary',
            'datef' => now()->subDays(2),
            'deleted' => false,
        ]);
        Note::create([
            'user_id' => $user->id,
            'title' => 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            'color' => 'error',
            'datef' => now()->subDays(3),
            'deleted' => false,
        ]);
        Note::create([
            'user_id' => $user->id,
            'title' => 'Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            'color' => 'warning',
            'datef' => now()->subDays(4),
            'deleted' => false,
        ]);
        Note::create([
            'user_id' => $user->id,
            'title' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            'color' => 'success',
            'datef' => now()->subDays(5),
            'deleted' => false,
        ]);

        // Tickets Data
        Ticket::truncate();
        Ticket::create([
            'user_id' => $user->id,
            'ticket_title' => 'Sed ut perspiciatis unde omnis iste',
            'ticket_description' => 'Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
            'status' => 'Closed',
            'label' => 'error',
            'thumb' => '/src/assets/images/profile/user-1.jpg',
            'agent_name' => 'Liam',
            'date' => now()->subDays(1),
            'deleted' => false,
        ]);
        Ticket::create([
            'user_id' => $user->id,
            'ticket_title' => 'Consequuntur magni dolores eos qui ratione',
            'ticket_description' => 'Sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
            'status' => 'Pending',
            'label' => 'warning',
            'thumb' => '/src/assets/images/profile/user-2.jpg',
            'agent_name' => 'Steve',
            'date' => now()->subDays(2),
            'deleted' => false,
        ]);
        Ticket::create([
            'user_id' => $user->id,
            'ticket_title' => 'Exercitationem ullam corporis suscipit',
            'ticket_description' => 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
            'status' => 'Open',
            'label' => 'success',
            'thumb' => '/src/assets/images/profile/user-3.jpg',
            'agent_name' => 'Jack',
            'date' => now()->subDays(3),
            'deleted' => false,
        ]);
        Ticket::create([
            'user_id' => $user->id,
            'ticket_title' => 'Quis autem vel eum iure reprehenderit',
            'ticket_description' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'status' => 'Closed',
            'label' => 'error',
            'thumb' => '/src/assets/images/profile/user-4.jpg',
            'agent_name' => 'Steve',
            'date' => now()->subDays(4),
            'deleted' => false,
        ]);
        Ticket::create([
            'user_id' => $user->id,
            'ticket_title' => 'Duis aute irure dolor in reprehenderit',
            'ticket_description' => 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'status' => 'Open',
            'label' => 'success',
            'thumb' => '/src/assets/images/profile/user-5.jpg',
            'agent_name' => 'Liam',
            'date' => now()->subDays(5),
            'deleted' => false,
        ]);

        // Blog Posts Data
        BlogPost::truncate();
        BlogComment::truncate();
        
        $p1 = BlogPost::create([
            'title' => 'Garmins Instinct Crossover is a rugged hybrid smartwatch',
            'content' => 'If you like the idea of a hybrid smartwatch, but need something that can handle tough workouts, Garmin has a new offering for you. Today it announced the Instinct Crossover.',
            'cover_img' => '/src/assets/images/blog/blog-img1.jpg',
            'category' => 'Gadget',
            'view' => 9125,
            'share' => 3,
            'featured' => false,
            'author_name' => 'Georgeanna Ramero',
            'author_avatar' => '/src/assets/images/profile/user-2.jpg',
        ]);
        BlogComment::create([
            'blog_post_id' => $p1->id,
            'name' => 'Donny Brown',
            'avatar' => '/src/assets/images/profile/user-3.jpg',
            'comment' => 'Great product review! The battery life on this Garmin hybrid looks incredible.',
        ]);

        $p2 = BlogPost::create([
            'title' => 'After Twitter drama, Mastodon users soar past 1 million',
            'content' => 'Mastodon, a decentralized open-source social network, has seen its user base explode past one million active monthly users as people look for alternatives.',
            'cover_img' => '/src/assets/images/blog/blog-img2.jpg',
            'category' => 'Social',
            'view' => 5612,
            'share' => 12,
            'featured' => false,
            'author_name' => 'Mathew Anderson',
            'author_avatar' => '/src/assets/images/profile/user-1.jpg',
        ]);

        $p3 = BlogPost::create([
            'title' => 'Streamlining design systems with Tailwind CSS and React',
            'content' => 'Modern design systems demand speed, consistency, and clean ergonomics. Combining Tailwind utility classes with modular React components provides unprecedented agility.',
            'cover_img' => '/src/assets/images/blog/blog-img3.jpg',
            'category' => 'Design',
            'view' => 14320,
            'share' => 45,
            'featured' => true,
            'author_name' => 'Liam Johnson',
            'author_avatar' => '/src/assets/images/profile/user-4.jpg',
        ]);

        // Transactions
        Transaction::truncate();
        Transaction::create([
            'time' => '09:30 am',
            'desc' => 'Payment received from John Doe of $385.90',
            'is_sale' => false,
            'border_color' => 'border-primary',
            'is_last_item' => false,
        ]);
        Transaction::create([
            'time' => '10:00 am',
            'desc' => 'New sale recorded',
            'is_sale' => true,
            'border_color' => 'border-info',
            'is_last_item' => false,
        ]);
        Transaction::create([
            'time' => '12:00 pm',
            'desc' => 'Payment was made of $64.95 to Michael',
            'is_sale' => false,
            'border_color' => 'border-success',
            'is_last_item' => false,
        ]);
        Transaction::create([
            'time' => '02:30 pm',
            'desc' => 'New sale recorded #ML-3467',
            'is_sale' => true,
            'border_color' => 'border-warning',
            'is_last_item' => false,
        ]);
        Transaction::create([
            'time' => '04:15 pm',
            'desc' => 'Project payment completed by Client',
            'is_sale' => false,
            'border_color' => 'border-error',
            'is_last_item' => true,
        ]);

        // Product Performances
        ProductPerformance::truncate();
        ProductPerformance::create([
            'username' => 'Sunil Joshi',
            'designation' => 'Web Designer',
            'project' => 'Elite Admin',
            'priority' => 'Low',
            'color' => 'primary',
            'bgcolor' => 'bg-primary text-white',
            'budget' => '$3.9k',
        ]);
        ProductPerformance::create([
            'username' => 'Andrew McDownland',
            'designation' => 'Project Manager',
            'project' => 'Real Homes WP Theme',
            'priority' => 'Medium',
            'color' => 'secondary',
            'bgcolor' => 'bg-secondary text-white',
            'budget' => '$24.5k',
        ]);
        ProductPerformance::create([
            'username' => 'Christopher Jamil',
            'designation' => 'Project Manager',
            'project' => 'MedicalPro WP Theme',
            'priority' => 'High',
            'color' => 'error',
            'bgcolor' => 'bg-error text-white',
            'budget' => '$12.8k',
        ]);
        ProductPerformance::create([
            'username' => 'Nirav Joshi',
            'designation' => 'Frontend Engineer',
            'project' => 'Hosting Press HTML',
            'priority' => 'Critical',
            'color' => 'success',
            'bgcolor' => 'bg-success text-white',
            'budget' => '$2.4k',
        ]);
        ProductPerformance::create([
            'username' => 'Micheal Doe',
            'designation' => 'Content Writer',
            'project' => 'Helping Hands WP Theme',
            'priority' => 'High',
            'color' => 'warning',
            'bgcolor' => 'bg-warning text-white',
            'budget' => '$9.3k',
        ]);

        Schema::enableForeignKeyConstraints();
    }
}