export enum AppRouteEnum {
    MAIN = '/',

    // Auth
    LOGIN = '/login',
    VERIFICATION = '/verification',

    // Habits
    HABITS = '/habits',
    ADD_HABIT = '/habits/add',
    EDIT_HABIT = '/habits/:habitId/edit',
    VIEW_HABIT = '/habits/:habitId',

    // Settings
    SETTINGS = '/settings',
    SETTINGS_THEME = '/settings/theme',
    SETTINGS_LANGUAGE = '/settings/language',

    // Errors
    NOT_FOUND = '/404',
    ANY = '*',
}
