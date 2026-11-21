<?php

namespace App\Http\Controllers;

use App\Models\ProductPerformance;
use App\Models\Transaction;
use App\Models\Note;
use App\Models\Ticket;
use App\Models\BlogPost;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    public function index(): JsonResponse
    {
        $transactions = Transaction::latest()->take(10)->get();
        $products = ProductPerformance::all();

        $stats = [
            'earnings' => [
                'title' => 'Total Earnings',
                'amount' => '$93,438.78',
                'growth' => '+9.0%',
                'icon' => 'currency-dollar',
            ],
            'expense' => [
                'title' => 'Total Expense',
                'amount' => '$32,400.00',
                'growth' => '-3.2%',
                'icon' => 'credit-card',
            ],
            'sales' => [
                'title' => 'Total Sales',
                'amount' => '48,820',
                'growth' => '+18.4%',
                'icon' => 'chart-bar',
            ],
            'revenue' => [
                'title' => 'Net Revenue',
                'amount' => '$61,038.78',
                'growth' => '+14.5%',
                'icon' => 'trending-up',
            ],
            'notes_count' => Note::where('deleted', false)->count(),
            'tickets_count' => Ticket::where('deleted', false)->count(),
            'blogs_count' => BlogPost::count(),
        ];

        return response()->json([
            'stats' => $stats,
            'recent_transactions' => $transactions,
            'product_performances' => $products,
        ]);
    }
}