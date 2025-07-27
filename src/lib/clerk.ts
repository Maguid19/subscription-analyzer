// Clerk configuration will be set up later
// For now, we'll use a simple middleware approach

export const clerkConfig = {
  publicRoutes: ['/', '/pricing', '/api/webhooks(.*)'],
  ignoredRoutes: ['/api/webhooks(.*)'],
};