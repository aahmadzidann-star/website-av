/**
 * Vercel Web Analytics Initialization
 * This script initializes Vercel Web Analytics for the AV Official Store website.
 */

// Import and inject Vercel Analytics
import { inject } from './analytics.mjs';

// Initialize analytics in production mode when deployed to Vercel
inject({
  mode: 'auto', // Automatically detects production/development environment
  debug: false  // Set to true for debugging in development
});
