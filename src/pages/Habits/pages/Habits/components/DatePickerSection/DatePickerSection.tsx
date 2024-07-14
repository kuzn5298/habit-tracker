import { HTMLAttributes } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
    Button,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui';
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
    const { t } = useTranslation();

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
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => shiftDay(-1)}
                                >
                                    <ChevronLeft className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t('PREVIOUS_DAY')}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => shiftDay(1)}
                                >
                                    <ChevronRight className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t('NEXT_DAY')}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            {isMobile && <WeekSelector date={date} onChange={onChange} />}
        </div>
    );
};
