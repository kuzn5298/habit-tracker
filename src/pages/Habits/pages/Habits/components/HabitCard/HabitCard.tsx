import { createElement, HTMLAttributes, MouseEvent } from 'react';

import { Checkbox } from '@/components/ui';
import { COLORS_MAP, ICONS_MAP } from '@/constants';
import { HabitColorType, HabitIconType } from '@/types';
import { cn } from '@/utils';

interface HabitCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    description?: string;
    color?: HabitColorType;
    icon?: HabitIconType;
    completed?: boolean;
    onComplete?: (state: boolean) => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({
    name,
    color,
    description,
    icon,
    completed,
    className,
    onComplete,
    ...props
}) => {
    const handleComplete = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onComplete?.(!completed);
    };

    return (
        <div
            className={cn(
                'flex min-h-16 cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 text-left text-sm transition-all hover:bg-accent',
                className
            )}
            {...props}
        >
            {icon && createElement(ICONS_MAP[icon])}
            <div className="grid flex-1 gap-0.5">
                <p className="flex items-center gap-2 overflow-hidden text-base font-medium leading-4">
                    <span className="truncate">{name}</span>
                    {color && (
                        <span
                            className="flex h-2 min-w-2 rounded-full"
                            style={{ backgroundColor: COLORS_MAP[color] }}
                        />
                    )}
                </p>
                {description && (
                    <p className="truncate text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
            <Checkbox
                className="size-6"
                checked={completed}
                onClick={handleComplete}
            />
        </div>
    );
};
