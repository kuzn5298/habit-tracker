import { HTMLAttributes } from 'react';

import { Skeleton } from '@/components/ui';
import { cn } from '@/utils';

interface SkeletonHabitCardProps extends HTMLAttributes<HTMLDivElement> {}

export const SkeletonHabitCard: React.FC<SkeletonHabitCardProps> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                'flex min-h-16 items-center gap-4 rounded-lg border px-4 py-3 text-left text-sm',
                className
            )}
            {...props}
        >
            <Skeleton className="size-6 rounded-lg" />
            <div className="flex flex-1 flex-col gap-0.5 overflow-hidden">
                <div className="flex h-4 items-center gap-2">
                    <Skeleton className="h-4 w-[150px] max-w-[70%]" />
                    <Skeleton className="size-2 rounded-full" />
                </div>
                <div className="flex h-5 items-center">
                    <Skeleton className="h-3.5 w-[250px] max-w-[80%]" />
                </div>
            </div>
            <Skeleton className="size-6 rounded-sm" />
        </div>
    );
};
