"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  DollarSign,
  CreditCard,
  AlertTriangle,
  Plus,
  BarChart3,
  Users,
  Settings,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { useDashboard } from "@/hooks/useDashboard";
import { formatCurrency } from "@/lib/utils";

// Mock AI recommendations (will be replaced with real data later)

const aiRecommendations = [
  {
    id: 1,
    title: 'Consider downgrading Netflix',
    description: 'You only watched 2 shows this month. Consider the Basic plan to save $8/month.',
    type: 'downgrade',
    potentialSavings: 8.00,
  },
  {
    id: 2,
    title: 'Spotify usage is low',
    description: 'You used Spotify only 3 times this month. Consider pausing or canceling.',
    type: 'cancel',
    potentialSavings: 9.99,
  },
  {
    id: 3,
    title: 'GitHub Pro is well utilized',
    description: 'Great usage of GitHub Pro features. Keep this subscription.',
    type: 'keep',
    potentialSavings: 0,
  },
];

export default function DashboardPage() {
  const { stats, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading dashboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading dashboard: {error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const dashboardStats = [
    {
      name: 'Total Monthly Spending',
      value: formatCurrency(stats?.totalMonthlySpending || 0),
      change: '+0%',
      changeType: 'neutral' as 'increase' | 'decrease' | 'neutral',
      icon: DollarSign,
    },
    {
      name: 'Active Subscriptions',
      value: stats?.activeSubscriptions?.toString() || '0',
      change: '+0',
      changeType: 'neutral' as 'increase' | 'decrease' | 'neutral',
      icon: CreditCard,
    },
    {
      name: 'Potential Savings',
      value: formatCurrency(stats?.potentialSavings || 0),
      change: '+$0',
      changeType: 'neutral' as 'increase' | 'decrease' | 'neutral',
      icon: TrendingUp,
    },
    {
      name: 'AI Recommendations',
      value: stats?.aiRecommendations?.toString() || '0',
      change: 'New',
      changeType: 'neutral' as 'increase' | 'decrease' | 'neutral',
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here&apos;s an overview of your subscriptions.</p>
        </div>
        <Link href="/dashboard/subscriptions/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Subscription
          </Button>
        </Link>
      </div>

            {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className={`text-xs ${
                stat.changeType === 'increase' ? 'text-green-600' :
                stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Subscriptions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Recent Subscriptions
            </CardTitle>
            <CardDescription>
              Your most recent subscription activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.recentSubscriptions?.length ? (
                stats.recentSubscriptions.map((subscription) => (
                  <div key={subscription.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{subscription.name}</div>
                        <div className="text-sm text-gray-500 capitalize">{subscription.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{formatCurrency(subscription.price)}</div>
                      <div className="text-sm text-gray-500">
                        Next: {subscription.next_billing_date ? new Date(subscription.next_billing_date).toLocaleDateString() : 'N/A'}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <CreditCard className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No subscriptions yet</p>
                  <p className="text-sm">Add your first subscription to get started</p>
                </div>
              )}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/subscriptions">
                <Button variant="outline" className="w-full">
                  View All Subscriptions
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              AI Recommendations
            </CardTitle>
            <CardDescription>
              Smart suggestions to optimize your spending
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiRecommendations.map((recommendation) => (
                <div key={recommendation.id} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{recommendation.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{recommendation.description}</div>
                    </div>
                    {recommendation.potentialSavings > 0 && (
                      <div className="text-sm font-medium text-green-600">
                        Save ${recommendation.potentialSavings}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Recommendations
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks to manage your subscriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/dashboard/subscriptions/new">
              <Button variant="outline" className="w-full h-20 flex-col">
                <Plus className="w-6 h-6 mb-2" />
                Add Subscription
              </Button>
            </Link>
            <Link href="/dashboard/analytics">
              <Button variant="outline" className="w-full h-20 flex-col">
                <BarChart3 className="w-6 h-6 mb-2" />
                View Analytics
              </Button>
            </Link>
            <Link href="/dashboard/team">
              <Button variant="outline" className="w-full h-20 flex-col">
                <Users className="w-6 h-6 mb-2" />
                Manage Team
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="outline" className="w-full h-20 flex-col">
                <Settings className="w-6 h-6 mb-2" />
                Settings
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}