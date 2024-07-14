import { cloneElement } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Button,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui';
import { getDayFromDate, getDayText } from '@/libs/date';

import { Action } from '../../types';

interface HeaderProps {
    actions?: Action[];
    date: string;
}

export const Header: React.FC<HeaderProps> = ({ actions = [], date }) => {
    const { t } = useTranslation('habits');
    const dayText = getDayText(getDayFromDate(date));

    return (
        <div className="flex items-center justify-between">
            <div className="flex-1 truncate text-2xl font-semibold sm:text-3xl">
                {t('HABITS_PER_DAY', { day: dayText })}
            </div>
            <div className="flex flex-nowrap">
                {actions.map(({ id, icon, onClick, tooltip }) => (
                    <TooltipProvider key={id}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={onClick}
                                >
                                    {cloneElement(icon)}
                                </Button>
                            </TooltipTrigger>
                            {tooltip && (
                                <TooltipContent>
                                    <p>{tooltip}</p>
                                </TooltipContent>
                            )}
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </div>
    );
};
