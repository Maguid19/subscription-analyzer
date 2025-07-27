// Application constants
export const APP_NAME = 'Subscription Usage Analyzer';
export const APP_DESCRIPTION = 'Monitor, manage, and optimize your digital subscriptions with AI-powered insights';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Subscription categories
export const SUBSCRIPTION_CATEGORIES = [
  { value: 'streaming', label: 'Streaming', icon: '🎬' },
  { value: 'productivity', label: 'Productivity', icon: '💼' },
  { value: 'development', label: 'Development', icon: '💻' },
  { value: 'design', label: 'Design', icon: '🎨' },
  { value: 'music', label: 'Music', icon: '🎵' },
  { value: 'gaming', label: 'Gaming', icon: '🎮' },
  { value: 'fitness', label: 'Fitness', icon: '💪' },
  { value: 'education', label: 'Education', icon: '📚' },
  { value: 'business', label: 'Business', icon: '🏢' },
  { value: 'other', label: 'Other', icon: '📦' },
] as const;

// Billing cycles
export const BILLING_CYCLES = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' },
] as const;

// Subscription statuses
export const SUBSCRIPTION_STATUSES = [
  { value: 'active', label: 'Active', color: 'green' },
  { value: 'cancelled', label: 'Cancelled', color: 'red' },
  { value: 'paused', label: 'Paused', color: 'yellow' },
] as const;

// Team roles
export const TEAM_ROLES = [
  { value: 'owner', label: 'Owner', color: 'purple' },
  { value: 'admin', label: 'Admin', color: 'blue' },
  { value: 'member', label: 'Member', color: 'gray' },
] as const;

// AI recommendation types
export const AI_RECOMMENDATION_TYPES = [
  { value: 'downgrade', label: 'Downgrade', color: 'blue' },
  { value: 'upgrade', label: 'Upgrade', color: 'green' },
  { value: 'cancel', label: 'Cancel', color: 'red' },
  { value: 'optimize', label: 'Optimize', color: 'yellow' },
] as const;

// Notification types
export const NOTIFICATION_TYPES = [
  { value: 'price_increase', label: 'Price Increase', color: 'red' },
  { value: 'underutilization', label: 'Underutilization', color: 'yellow' },
  { value: 'billing_reminder', label: 'Billing Reminder', color: 'blue' },
  { value: 'ai_recommendation', label: 'AI Recommendation', color: 'purple' },
] as const;

// Currency options
export const CURRENCIES = [
  { value: 'USD', label: 'US Dollar ($)', symbol: '$' },
  { value: 'EUR', label: 'Euro (€)', symbol: '€' },
  { value: 'GBP', label: 'British Pound (£)', symbol: '£' },
  { value: 'CAD', label: 'Canadian Dollar (C$)', symbol: 'C$' },
  { value: 'AUD', label: 'Australian Dollar (A$)', symbol: 'A$' },
] as const;

// Navigation items
export const NAVIGATION_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/subscriptions', label: 'Subscriptions', icon: '📋' },
  { href: '/analytics', label: 'Analytics', icon: '📈' },
  { href: '/team', label: 'Team', icon: '👥' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
] as const;

// Dashboard cards
export const DASHBOARD_CARDS = [
  { id: 'total-spending', title: 'Total Monthly Spending', icon: '💰' },
  { id: 'active-subscriptions', title: 'Active Subscriptions', icon: '✅' },
  { id: 'potential-savings', title: 'Potential Savings', icon: '💡' },
  { id: 'ai-recommendations', title: 'AI Recommendations', icon: '🤖' },
] as const;

// Export formats
export const EXPORT_FORMATS = [
  { value: 'csv', label: 'CSV', icon: '📄' },
  { value: 'pdf', label: 'PDF', icon: '📑' },
  { value: 'json', label: 'JSON', icon: '📋' },
] as const;

// Date formats
export const DATE_FORMATS = {
  short: 'MMM dd, yyyy',
  long: 'MMMM dd, yyyy',
  time: 'MMM dd, yyyy HH:mm',
  month: 'MMMM yyyy',
  day: 'EEEE, MMMM dd',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  subscriptions: '/api/subscriptions',
  teams: '/api/teams',
  analytics: '/api/analytics',
  ai: '/api/ai',
  notifications: '/api/notifications',
  webhooks: {
    stripe: '/api/webhooks/stripe',
    clerk: '/api/webhooks/clerk',
  },
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'subscription-analyzer-theme',
  sidebarCollapsed: 'subscription-analyzer-sidebar-collapsed',
  selectedTeam: 'subscription-analyzer-selected-team',
  filters: 'subscription-analyzer-filters',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  validation: 'Please check your input and try again.',
  subscriptionLimit: 'You have reached your subscription limit for this plan.',
  teamLimit: 'You have reached your team member limit for this plan.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  subscriptionCreated: 'Subscription created successfully.',
  subscriptionUpdated: 'Subscription updated successfully.',
  subscriptionDeleted: 'Subscription deleted successfully.',
  teamCreated: 'Team created successfully.',
  teamUpdated: 'Team updated successfully.',
  memberAdded: 'Team member added successfully.',
  memberRemoved: 'Team member removed successfully.',
  settingsSaved: 'Settings saved successfully.',
} as const;

// Limits
export const LIMITS = {
  starter: {
    subscriptions: 10,
    teamMembers: 0,
    exports: 5,
  },
  pro: {
    subscriptions: -1, // unlimited
    teamMembers: 0,
    exports: 50,
  },
  team: {
    subscriptions: -1, // unlimited
    teamMembers: 5,
    exports: 100,
  },
  business: {
    subscriptions: -1, // unlimited
    teamMembers: 15,
    exports: -1, // unlimited
  },
} as const;

// Feature flags
export const FEATURES = {
  aiRecommendations: {
    starter: false,
    pro: true,
    team: true,
    business: true,
  },
  teamManagement: {
    starter: false,
    pro: false,
    team: true,
    business: true,
  },
  advancedAnalytics: {
    starter: false,
    pro: true,
    team: true,
    business: true,
  },
  apiAccess: {
    starter: false,
    pro: false,
    team: false,
    business: true,
  },
} as const;