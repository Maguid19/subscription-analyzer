import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'starter',
    price: 2.99,
    currency: 'USD',
    billingCycle: 'monthly',
    features: [
      'Up to 10 subscriptions',
      'Basic analytics dashboard',
      'Email price alerts',
      'Mobile app access',
      'CSV export',
      'Email support',
    ],
    maxSubscriptions: 10,
    aiFeatures: false,
    exportFeatures: false,
    stripePriceId: 'price_starter_monthly',
  },
  {
    id: 'pro',
    name: 'pro',
    price: 5.99,
    currency: 'USD',
    billingCycle: 'monthly',
    features: [
      'Unlimited subscriptions',
      'AI-powered recommendations',
      'Advanced analytics',
      'Custom reports',
      'PDF export',
      'Priority email support',
      'Usage tracking',
      'Price history',
    ],
    maxSubscriptions: -1, // unlimited
    aiFeatures: true,
    exportFeatures: true,
    stripePriceId: 'price_pro_monthly',
  },
  {
    id: 'team',
    name: 'team',
    price: 19.99,
    currency: 'USD',
    billingCycle: 'monthly',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Team dashboard',
      'Role-based access',
      'Shared subscriptions',
      'Team analytics',
      'Member tagging',
      'Team reports',
    ],
    maxSubscriptions: -1, // unlimited
    maxTeamMembers: 5,
    aiFeatures: true,
    exportFeatures: true,
    stripePriceId: 'price_team_monthly',
  },
  {
    id: 'business',
    name: 'business',
    price: 49.99,
    currency: 'USD',
    billingCycle: 'monthly',
    features: [
      'Everything in Team',
      'Up to 15 team members',
      'API access',
      'Advanced exports',
      'Custom integrations',
      'Priority phone support',
      'Dedicated account manager',
      'White-label options',
    ],
    maxSubscriptions: -1, // unlimited
    maxTeamMembers: 15,
    aiFeatures: true,
    exportFeatures: true,
    stripePriceId: 'price_business_monthly',
  },
];

export const yearlyPricingPlans: PricingPlan[] = pricingPlans.map(plan => ({
  ...plan,
  price: Math.round(plan.price * 12 * 0.8 * 100) / 100, // 20% discount
  billingCycle: 'yearly',
  stripePriceId: plan.stripePriceId.replace('monthly', 'yearly'),
}));

export function getPlanById(id: string, isYearly: boolean = false): PricingPlan | undefined {
  const plans = isYearly ? yearlyPricingPlans : pricingPlans;
  return plans.find(plan => plan.id === id);
}

export function getPlanByName(name: string, isYearly: boolean = false): PricingPlan | undefined {
  const plans = isYearly ? yearlyPricingPlans : pricingPlans;
  return plans.find(plan => plan.name === name);
}

export function getPlanByStripePriceId(stripePriceId: string): PricingPlan | undefined {
  const allPlans = [...pricingPlans, ...yearlyPricingPlans];
  return allPlans.find(plan => plan.stripePriceId === stripePriceId);
}

export function calculateSavings(monthlyPrice: number, yearlyPrice: number): number {
  const yearlyMonthlyEquivalent = yearlyPrice / 12;
  return Math.round((monthlyPrice - yearlyMonthlyEquivalent) * 100) / 100;
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(price);
}