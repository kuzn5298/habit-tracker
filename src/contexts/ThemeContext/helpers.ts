import { colorLuminance, hexToHSLValues } from '@/utils';

import { COLOR_CUSTOM_PROPERTIES } from './constants';

export const clearCustomColors = () => {
    COLOR_CUSTOM_PROPERTIES.forEach((color) => {
        document.documentElement.style.removeProperty(`--${color}`);
    });
};

const setCustomColors = (mapColors: Record<string, string>) => {
    Object.entries(mapColors).forEach(([color, custom]) => {
        document.documentElement.style.setProperty(`--${color}`, custom);
    });
};

export const setCustomTelegramColors = (colors: Record<string, string>) => {
    const map = {
        background: hexToHSLValues(colors.bg_color),
        foreground: hexToHSLValues(colors.text_color),
        card: hexToHSLValues(colors.bg_color),
        'card-foreground': hexToHSLValues(colors.text_color),
        popover: hexToHSLValues(colors.bg_color),
        'popover-foreground': hexToHSLValues(colors.text_color),
        primary: hexToHSLValues(colors.button_color),
        'primary-foreground': hexToHSLValues(colors.button_text_color),
        secondary: hexToHSLValues(colorLuminance(colors.bg_color, 0.1)),
        'secondary-foreground': hexToHSLValues(colors.accent_text_color),
        muted: hexToHSLValues(colorLuminance(colors.bg_color, 0.2)),
        'muted-foreground': hexToHSLValues(colors.hint_color),
        destructive: hexToHSLValues(
            colorLuminance(colors.destructive_text_color, -0.3)
        ),
        'destructive-foreground': hexToHSLValues(colors.text_color),
        accent: hexToHSLValues(colorLuminance(colors.bg_color, -0.1)),
        'accent-foreground': hexToHSLValues(colors.text_color),
        border: hexToHSLValues(colorLuminance(colors.bg_color, -0.1)),
        input: hexToHSLValues(colorLuminance(colors.bg_color, -0.15)),
        ring: hexToHSLValues(colorLuminance(colors.bg_color, -0.25)),
    };
    setCustomColors(map);
};
