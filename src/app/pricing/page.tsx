import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 2.99,
    description: 'Perfect for individuals getting started with subscription management',
    features: [
      'Up to 10 subscriptions',
      'Basic analytics dashboard',
      'Email price alerts',
      'Mobile app access',
      'CSV export',
      'Email support',
    ],
    notIncluded: [
      'AI recommendations',
      'Team collaboration',
      'Advanced reports',
      'API access',
    ],
    popular: false,
    stripePriceId: 'price_starter_monthly',
  },
  {
    name: 'Pro',
    price: 5.99,
    description: 'Best for power users who want advanced features and AI insights',
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
    notIncluded: [
      'Team collaboration',
      'API access',
      'White-label options',
    ],
    popular: true,
    stripePriceId: 'price_pro_monthly',
  },
  {
    name: 'Team',
    price: 19.99,
    description: 'Ideal for small teams and growing businesses',
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
    notIncluded: [
      'API access',
      'White-label options',
      'Custom integrations',
    ],
    popular: false,
    stripePriceId: 'price_team_monthly',
  },
  {
    name: 'Business',
    price: 49.99,
    description: 'For larger organizations with advanced needs',
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
    notIncluded: [
      'Unlimited team members',
      'Enterprise SSO',
    ],
    popular: false,
    stripePriceId: 'price_business_monthly',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Pricing Content */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Start free and upgrade as you grow.
          All plans include a 14-day free trial.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className="text-gray-600">Monthly</span>
          <div className="relative">
            <input type="checkbox" className="sr-only" id="billing-toggle" />
            <label htmlFor="billing-toggle" className="block w-16 h-8 bg-gray-300 rounded-full cursor-pointer">
              <span className="block w-6 h-6 bg-white rounded-full transform transition-transform duration-200 ease-in-out translate-x-1 translate-y-1"></span>
            </label>
          </div>
          <span className="text-gray-600">Yearly <span className="text-green-600 font-semibold">(Save 20%)</span></span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? 'border-2 border-blue-500 shadow-xl scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-gray-900">${plan.price}</div>
                <div className="text-sm text-gray-500">per month</div>
                <CardDescription className="mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What&apos;s included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Not included:</h4>
                  <ul className="space-y-2">
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <X className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link href={`/sign-up?plan=${plan.name.toLowerCase()}`}>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our pricing and plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes, all plans include a 14-day free trial. No credit card required to start.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                                 We offer a 30-day money-back guarantee if you&apos;re not satisfied with our service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use bank-level encryption and never store your payment information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to take control of your subscriptions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already saving money with our intelligent subscription analyzer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SA</span>
                </div>
                <span className="text-xl font-bold">Subscription Analyzer</span>
              </div>
              <p className="text-gray-400">
                Take control of your digital subscriptions with intelligent insights and optimization tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/status" className="hover:text-white">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Subscription Analyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}