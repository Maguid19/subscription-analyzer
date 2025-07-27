import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

// Format date
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d);
}

// Calculate monthly cost from yearly
export function getMonthlyCost(yearlyCost: number): number {
  return yearlyCost / 12;
}

// Calculate yearly cost from monthly
export function getYearlyCost(monthlyCost: number): number {
  return monthlyCost * 12;
}

// Get category color
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    streaming: 'bg-red-100 text-red-800',
    productivity: 'bg-blue-100 text-blue-800',
    development: 'bg-green-100 text-green-800',
    design: 'bg-purple-100 text-purple-800',
    music: 'bg-pink-100 text-pink-800',
    gaming: 'bg-yellow-100 text-yellow-800',
    fitness: 'bg-indigo-100 text-indigo-800',
    education: 'bg-teal-100 text-teal-800',
    business: 'bg-gray-100 text-gray-800',
    other: 'bg-slate-100 text-slate-800',
  };

  return colors[category] || colors.other;
}

// Get category icon
export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    streaming: '🎬',
    productivity: '💼',
    development: '💻',
    design: '🎨',
    music: '🎵',
    gaming: '🎮',
    fitness: '💪',
    education: '📚',
    business: '🏢',
    other: '📦',
  };

  return icons[category] || icons.other;
}

// Generate random ID
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}