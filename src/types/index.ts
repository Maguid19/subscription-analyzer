// User types
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Team types
export interface Team {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  teamId: string;
  userId: string;
  role: 'owner' | 'admin' | 'member';
  joinedAt: Date;
  user?: User;
}

// Subscription types
export interface Subscription {
  id: string;
  name: string;
  description?: string;
  category: SubscriptionCategory;
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'paused';
  startDate: Date;
  nextBillingDate: Date;
  userId: string;
  teamId?: string;
  tags: string[];
  usageData?: UsageData[];
  createdAt: Date;
  updatedAt: Date;
}

export type SubscriptionCategory =
  | 'streaming'
  | 'productivity'
  | 'development'
  | 'design'
  | 'music'
  | 'gaming'
  | 'fitness'
  | 'education'
  | 'business'
  | 'other';

// Usage tracking
export interface UsageData {
  id: string;
  subscriptionId: string;
  date: Date;
  usageCount: number;
  usageDuration?: number; // in minutes
  notes?: string;
}

// AI Recommendations
export interface AIRecommendation {
  id: string;
  subscriptionId: string;
  type: 'downgrade' | 'upgrade' | 'cancel' | 'optimize';
  title: string;
  description: string;
  confidence: number; // 0-1
  potentialSavings?: number;
  createdAt: Date;
  isRead: boolean;
}

// Pricing plans
export interface PricingPlan {
  id: string;
  name: 'starter' | 'pro' | 'team' | 'business';
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  maxSubscriptions: number;
  maxTeamMembers?: number;
  aiFeatures: boolean;
  exportFeatures: boolean;
  stripePriceId: string;
}

// Notifications
export interface Notification {
  id: string;
  userId: string;
  type: 'price_increase' | 'underutilization' | 'billing_reminder' | 'ai_recommendation';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  metadata?: Record<string, unknown>;
}

// Dashboard data
export interface DashboardStats {
  totalSubscriptions: number;
  monthlySpending: number;
  yearlySpending: number;
  activeSubscriptions: number;
  potentialSavings: number;
  topCategories: Array<{
    category: SubscriptionCategory;
    spending: number;
    count: number;
  }>;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}