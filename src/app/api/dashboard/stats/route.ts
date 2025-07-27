import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = createServerSupabaseClient();

    // Get user ID from our database
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('clerk_id', userId)
      .single();

    if (userError || !userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get basic subscription stats
    const { data: subscriptions, error: subError } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userData.id)
      .eq('status', 'active');

    if (subError) {
      console.error('Error fetching subscriptions:', subError);
      return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }

    // Calculate monthly spending
    const monthlySpending = subscriptions?.reduce((total, sub) => {
      let monthlyCost = sub.price;
      if (sub.billing_cycle === 'yearly') {
        monthlyCost = sub.price / 12;
      } else if (sub.billing_cycle === 'quarterly') {
        monthlyCost = sub.price / 4;
      } else if (sub.billing_cycle === 'weekly') {
        monthlyCost = sub.price * 4;
      }
      return total + monthlyCost;
    }, 0) || 0;

    // Calculate yearly spending
    const yearlySpending = subscriptions?.reduce((total, sub) => {
      let yearlyCost = sub.price;
      if (sub.billing_cycle === 'monthly') {
        yearlyCost = sub.price * 12;
      } else if (sub.billing_cycle === 'quarterly') {
        yearlyCost = sub.price * 4;
      } else if (sub.billing_cycle === 'weekly') {
        yearlyCost = sub.price * 52;
      }
      return total + yearlyCost;
    }, 0) || 0;

    // Get AI recommendations count
    const { count: recommendationsCount, error: recError } = await supabase
      .from('ai_recommendations')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userData.id)
      .eq('is_read', false);

    if (recError) {
      console.error('Error fetching recommendations:', recError);
    }

    // Get recent subscriptions (last 4)
    const recentSubscriptions = subscriptions?.slice(0, 4) || [];

    // Calculate potential savings (mock data for now)
    const potentialSavings = monthlySpending * 0.15; // 15% potential savings

    const stats = {
      totalMonthlySpending: monthlySpending,
      totalYearlySpending: yearlySpending,
      activeSubscriptions: subscriptions?.length || 0,
      potentialSavings: potentialSavings,
      aiRecommendations: recommendationsCount || 0,
      recentSubscriptions,
      spendingByCategory: subscriptions?.reduce((acc, sub) => {
        const category = sub.category || 'other';
        acc[category] = (acc[category] || 0) + sub.price;
        return acc;
      }, {} as Record<string, number>) || {}
    };

    return NextResponse.json({ stats });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}