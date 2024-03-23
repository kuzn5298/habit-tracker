import { defineConfig, minimal2023Preset } from '@vite-pwa/assets-generator/config';

export default defineConfig({
    headLinkOptions: {
        preset: '2023',
    },
    preset: {
        ...minimal2023Preset,
        apple: {
            sizes: [180],
            resizeOptions: { background: '#212330' },
        },
        maskable: {
            sizes: [512],
            resizeOptions: { background: '#212330' },
        },
    },
    images: ['public/favicon.svg'],
});
