import { MapObject } from '@/types';

import { LanguageEnum } from '../enums';

export const LANGUAGE_STORAGE_NAME = 'language';

export const DEFAULT_LANGUAGE = LanguageEnum.ENGLISH;

export const LANGUAGES_MAP: MapObject<LanguageEnum, string> = {
    [LanguageEnum.ENGLISH]: 'ENGLISH_LANGUAGE',
    [LanguageEnum.RUSSIAN]: 'RUSSIAN_LANGUAGE',
};

export const AVAILABLE_LANGUAGES = [LanguageEnum.ENGLISH, LanguageEnum.RUSSIAN];
