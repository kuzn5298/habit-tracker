import {
    BookA,
    BookType,
    Cigarette,
    Droplet,
    Footprints,
    GlassWater,
    LucideIcon,
} from 'lucide-react';

import { MapObject } from '@/types';

export const ICONS_MAP: MapObject<string, LucideIcon> = {
    'book-a': BookA,
    'book-t': BookType,
    steps: Footprints,
    'glass-water': GlassWater,
    droplet: Droplet,
    cigarette: Cigarette,
};
