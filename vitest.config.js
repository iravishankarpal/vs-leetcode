import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        global: true,
        includeSource: ['./*.{js,ts}'],
        setupFiles: './vitest.setup.js',
    },
});
