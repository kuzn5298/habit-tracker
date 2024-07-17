export enum AppRouteEnum {
    MAIN = '/',

    // Auth
    LOGIN = '/login',
    TELEGRAM_LOGIN = '/login-with-telegram',
    VERIFICATION = '/verification',

    // Habits
    HABITS = '/habits',
    ADD_HABIT = '/habits/add',
    VIEW_HABIT = '/habits/:habitId',
    EDIT_HABIT = '/habits/:habitId/edit',

    // Settings
    SETTINGS = '/settings',
    SETTINGS_THEME = '/settings/theme',
    SETTINGS_LANGUAGE = '/settings/language',

    // Errors
    NOT_FOUND = '/404',
    ANY = '*',
}
