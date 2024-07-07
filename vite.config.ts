import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';

const root = resolve(__dirname, './src');

const manifest: Partial<ManifestOptions> = {
    name: 'Habit Tracker',
    short_name: 'Habit Tracker',
    theme_color: '#212330',
    background_color: '#212330',
    icons: [
        {
            src: 'images/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
        },
        {
            src: 'images/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: 'images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
        },
        {
            src: 'images/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
        },
    ],
};

const ReactCompilerConfig = {};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
            },
        }),
        VitePWA({
            registerType: 'autoUpdate',
            manifest,
            pwaAssets: {
                config: true,
            },
        }),
    ],
    resolve: {
        alias: {
            '@': root,
        },
    },
});
