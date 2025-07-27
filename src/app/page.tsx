import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart3,
  TrendingUp,
  Users,
  Zap,
  Shield,
  CreditCard,
  Brain
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Take Control of Your
          <span className="text-blue-600"> Digital Subscriptions</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Monitor, manage, and optimize your subscription spending with AI-powered insights.
          Save money and eliminate unused services with our intelligent subscription analyzer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-up">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to manage subscriptions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From individual users to teams, we provide comprehensive tools to track and optimize your digital spending.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Smart Analytics</CardTitle>
              <CardDescription>
                Get detailed insights into your subscription spending with beautiful charts and reports.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>
                Receive intelligent suggestions to optimize your subscriptions and save money.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Team Management</CardTitle>
              <CardDescription>
                Manage team subscriptions with role-based access and collaborative features.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Automated Tracking</CardTitle>
              <CardDescription>
                Import subscriptions from emails and automatically track usage patterns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Price Alerts</CardTitle>
              <CardDescription>
                Get notified about price increases and billing changes in real-time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle>Export & Reports</CardTitle>
              <CardDescription>
                Generate detailed reports and export data in CSV or PDF formats.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Starter</CardTitle>
              <div className="text-3xl font-bold">$2.99</div>
              <div className="text-sm text-gray-500">per month</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ 10 subscriptions</li>
                <li>✓ Basic analytics</li>
                <li>✓ Email alerts</li>
                <li>✓ Mobile app</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Pro</CardTitle>
              <div className="text-3xl font-bold">$5.99</div>
              <div className="text-sm text-gray-500">per month</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Unlimited subscriptions</li>
                <li>✓ AI recommendations</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Export reports</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Team</CardTitle>
              <div className="text-3xl font-bold">$19.99</div>
              <div className="text-sm text-gray-500">per month</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ 5 team members</li>
                <li>✓ Team analytics</li>
                <li>✓ Role management</li>
                <li>✓ Shared dashboard</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Business</CardTitle>
              <div className="text-3xl font-bold">$49.99</div>
              <div className="text-sm text-gray-500">per month</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ 15 team members</li>
                <li>✓ Advanced exports</li>
                <li>✓ API access</li>
                <li>✓ Priority support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              View All Plans
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
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
