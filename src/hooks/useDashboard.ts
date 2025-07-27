import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@clerk/nextjs';

interface DashboardStats {
  totalMonthlySpending: number;
  totalYearlySpending: number;
  activeSubscriptions: number;
  potentialSavings: number;
  aiRecommendations: number;
  recentSubscriptions: Array<{
    id: string;
    name: string;
    category: string;
    price: number;
    next_billing_date?: string;
  }>;
  spendingByCategory: Record<string, number>;
}

interface UseDashboardReturn {
  stats: DashboardStats | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useDashboard(): UseDashboardReturn {
  const { isSignedIn } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    const fetchStats = useCallback(async () => {
    if (!isSignedIn) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/dashboard/stats');

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard stats');
      }

      const data = await response.json();
      setStats(data.stats);
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [isSignedIn]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
}