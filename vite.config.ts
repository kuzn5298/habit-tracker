import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const root = resolve(__dirname, './src');

const manifest = {
    name: 'Habit Tracker',
    short_name: 'Habit Tracker',
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

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'mask-icon.svg',
            ],
            manifest,
        }),
    ],
    resolve: {
        alias: {
            '@': root,
        },
    },
});
