import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

const manifest = {
    name: 'Habit Tracker',
    short_name: 'Habit Tracker',
    background_color: '#212330',
    icons: [
        {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
        },
        {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
        },
        {
            src: 'maskable-icon-512x512.png',
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
            '@components': resolve(root, 'components'),
            '@constants': resolve(root, 'constants'),
            '@contexts': resolve(root, 'contexts'),
            '@hooks': resolve(root, 'hooks'),
            '@styles': resolve(root, 'styles'),
            '@libs': resolve(root, 'libs'),
            '@utils': resolve(root, 'utils'),
        },
    },
});
