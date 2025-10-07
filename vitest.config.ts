import { defineConfig } from 'vitest/config';
import { config } from 'dotenv';

// Load .env file before running tests
config();

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'build/',
        'tests/',
        '*.config.*'
      ]
    }
  }
});
