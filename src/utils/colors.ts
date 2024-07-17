export const hexToHSLValues = (H: string) => {
    // Convert hex to RGB first
    let r = 0;
    let g = 0;
    let b = 0;
    if (H.length === 4) {
        r = Number(`0x${H[1]}${H[1]}`);
        g = Number(`0x${H[2]}${H[2]}`);
        b = Number(`0x${H[3]}${H[3]}`);
    } else if (H.length === 7) {
        r = Number(`0x${H[1]}${H[2]}`);
        g = Number(`0x${H[3]}${H[4]}`);
        b = Number(`0x${H[5]}${H[6]}`);
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return `${h} ${s}% ${l}%`;
};

export const colorLuminance = (hexColor: string, luminance: number) => {
    let hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const lum = luminance || 0;

    let rgb = '#';
    let c;
    for (let i = 0; i < 3; i += 1) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
        rgb += `00${c}`.substr(c.length);
    }

    return rgb;
};
