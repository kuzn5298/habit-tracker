import type { Config } from 'tailwindcss';

const theme: Config['theme'] = {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-text': 'rgba(var(--text-primary) / <alpha-value>)',
        'primary-bg': 'rgba(var(--bg-primary) / <alpha-value>)',
    },
};

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme,
    plugins: [],
} as Config;
