import { defineConfig } from 'vitest/config';

// https://vitest.dev/config/
export default defineConfig({
    test: {
        global: true,
        setupFiles: './vitest.setup.js',
    },
});
