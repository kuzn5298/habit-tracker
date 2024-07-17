/* eslint-disable @typescript-eslint/no-explicit-any */
export const expandTelegramApp = () => {
    (window as any).TelegramWebviewProxy?.postEvent('web_app_expand');
};

export const transformData = (initData: string) => {
    return Object.fromEntries(new URLSearchParams(initData));
};
