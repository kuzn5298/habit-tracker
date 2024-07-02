import { HTMLAttributes, useMemo } from 'react';

import { Button } from '@/components/ui';
import { formatDate, getDayMinText, selectWeek } from '@/libs/date';
import { cn } from '@/utils';

interface WeekSelectorProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    date: string;
    onChange?: (date: string) => void;
}

export const WeekSelector: React.FC<WeekSelectorProps> = ({
    date,
    onChange,
    className,
    ...props
}) => {
    const week = useMemo(() => selectWeek(date), [date]);

    return (
        <div
            className={cn('flex justify-between w-full', className)}
            {...props}
        >
            {week.map((d, i) => (
                <div key={d} className="flex flex-col gap-2">
                    <div className="text-center">{getDayMinText(i)}</div>
                    <div>
                        <Button
                            variant={d === date ? 'default' : 'ghost'}
                            size="icon"
                            onClick={() => onChange?.(d)}
                        >
                            {formatDate(d, 'D')}
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
