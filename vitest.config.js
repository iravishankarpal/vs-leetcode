import { defineConfig } from 'vitest/config';

// https://vitest.dev/config/
export default defineConfig({
    test: {
        global: true,
        includeSource: ['./*.{js,ts}'],
        setupFiles: './vitest.setup.js',
    },
});
