import { createElement } from 'react';

import { Checkbox } from '@/components';
import { COLORS_MAP, ICONS_MAP } from '@/constants';
import { cn } from '@/utils/ui';

interface HabitCardProps {
    name: string;
    description?: string;
    color?: string;
    icon?: string;
    completed?: boolean;
}

export const HabitCard: React.FC<HabitCardProps> = ({
    name,
    color,
    description,
    icon,
    completed,
}) => {
    return (
        <div className="flex min-h-16 cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 text-left text-sm transition-all hover:bg-accent">
            {icon && createElement(ICONS_MAP[icon])}
            <div className="grid flex-1 gap-0.5">
                <p className="flex items-center gap-2 overflow-hidden text-sm font-medium leading-4">
                    <span className="truncate">{name}</span>
                    {color && (
                        <span
                            className={cn(
                                'flex min-w-2 h-2 rounded-full',
                                COLORS_MAP[color]
                            )}
                        />
                    )}
                </p>
                {description && (
                    <p className="truncate text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
            <Checkbox className="size-6" checked={completed} />
        </div>
    );
};
