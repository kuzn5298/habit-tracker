import { HTMLAttributes } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui';
import { useBreakpoint } from '@/hooks';
import { formatDate } from '@/libs/date';

import { CalendarDialog } from './CalendarDialog';
import { WeekSelector } from './WeekSelector';

interface DatePickerSectionProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    date: string;
    onChange?: (date: string) => void;
}

export const DatePickerSection: React.FC<DatePickerSectionProps> = ({
    date,
    onChange,
}) => {
    const isMobile = useBreakpoint('sm');

    const shiftDay = (shift: number) => {
        const d = new Date(date);
        d.setDate(d.getDate() + shift);
        const newDate = formatDate(d, 'YYYY-MM-DD');
        onChange?.(newDate);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
                <CalendarDialog date={date} onChange={onChange} />
                <div className="flex-1 text-xl font-semibold sm:text-2xl">
                    {formatDate(date, isMobile ? 'MMMM YYYY' : 'MMMM D, YYYY')}
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => shiftDay(-1)}
                    >
                        <ChevronLeft className="size-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => shiftDay(1)}
                    >
                        <ChevronRight className="size-5" />
                    </Button>
                </div>
            </div>
            {isMobile && <WeekSelector date={date} onChange={onChange} />}
        </div>
    );
};
