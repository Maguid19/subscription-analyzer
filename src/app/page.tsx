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
  Brain,
  CheckCircle,
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Target
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-background-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text">SubscriptionAI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-text-secondary hover:text-text transition-colors">Features</Link>
              <Link href="#pricing" className="text-text-secondary hover:text-text transition-colors">Pricing</Link>
              <Link href="#about" className="text-text-secondary hover:text-text transition-colors">About</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button variant="ghost" className="text-text-secondary hover:text-text">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
            Save Money on Your
            <span className="text-primary-500"> Digital Subscriptions</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Automatically track, analyze, and optimize your subscription spending with AI-powered insights.
            Stop wasting money on unused services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/sign-up">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-3 rounded-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 border-text-secondary text-text-secondary hover:bg-text-secondary hover:text-white">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-text-secondary font-medium">Loved by 500+ users</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
              Struggling to manage subscriptions? You're not alone.
            </h2>
            <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
              Most people waste hundreds of dollars on forgotten subscriptions, leaving no time to focus on what actually matters.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Forgotten Subscriptions</h3>
                <p className="text-text-secondary">Lose track of what you're paying for</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Manual Tracking</h3>
                <p className="text-text-secondary">Hours spent managing spreadsheets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Wasted Money</h3>
                <p className="text-text-secondary">Paying for services you don't use</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">No Optimization</h3>
                <p className="text-text-secondary">Missing better deals and plans</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-semibold text-text mb-4">But there's a better way</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              AI-Powered Subscription Management
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Automatically discover, track, and optimize your subscriptions with intelligent insights and recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle className="text-text">Smart Analytics</CardTitle>
                <CardDescription className="text-text-secondary">
                  Get detailed insights into your subscription spending with beautiful charts and AI-powered analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-text">Auto-Discovery</CardTitle>
                <CardDescription className="text-text-secondary">
                  Automatically find and import subscriptions from your emails and bank statements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-text">AI Recommendations</CardTitle>
                <CardDescription className="text-text-secondary">
                  Receive intelligent suggestions to optimize your subscriptions and save money.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-text">Price Alerts</CardTitle>
                <CardDescription className="text-text-secondary">
                  Get notified about price increases and billing changes in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-text">Team Management</CardTitle>
                <CardDescription className="text-text-secondary">
                  Manage team subscriptions with role-based access and collaborative features.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-text">Export & Reports</CardTitle>
                <CardDescription className="text-text-secondary">
                  Generate detailed reports and export data in CSV or PDF formats.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">$500+</div>
              <div className="text-primary-100">Average savings per user</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-primary-100">Time reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Automated monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Start finding subscription savings today. Choose the plan that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-background-200 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-text">Starter</CardTitle>
                <div className="text-3xl font-bold text-text">$2.99</div>
                <div className="text-sm text-text-secondary">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />10 subscriptions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Basic analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Email alerts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mobile app</li>
                </ul>
                <Button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-500 relative bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-text">Pro</CardTitle>
                <div className="text-3xl font-bold text-text">$5.99</div>
                <div className="text-sm text-text-secondary">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Unlimited subscriptions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />AI recommendations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Advanced analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Export reports</li>
                </ul>
                <Button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-background-200 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-text">Team</CardTitle>
                <div className="text-3xl font-bold text-text">$19.99</div>
                <div className="text-sm text-text-secondary">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />5 team members</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Team analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Role management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Shared dashboard</li>
                </ul>
                <Button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-text-secondary">Free plan available with limited features. No credit card required to start.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SubscriptionAI</span>
              </div>
              <p className="text-gray-400">
                Take control of your digital subscriptions with intelligent insights and optimization tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#about" className="hover:text-white">About</Link></li>
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
            <p>&copy; 2024 SubscriptionAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
