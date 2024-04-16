import { createElement, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PageButton, PageDialogBody } from '@/components/custom';
import { Button } from '@/components/ui';
import { ICONS_MAP, WEEK_DAYS } from '@/constants';
import { formatDayCalendar, getDayMinText } from '@/libs/date';

import { AddHabitScreenEnum } from '../../../constants';
import { useAddHabit } from '../../../hooks';
import {
    ColorPickerControlled,
    InputControlled,
    TextareaControlled,
} from './form';

export const AddHabitScreenBody: React.FC = () => {
    const { form, setScreen } = useAddHabit();
    const { t } = useTranslation('habits');

    const icon = form.watch('icon');
    const repeatList = form.watch('repeatList');
    const startDate = form.watch('startDate');

    const startDateText = useMemo(
        () => formatDayCalendar(startDate),
        [startDate]
    );

    const repeatListText = useMemo(() => {
        if (repeatList.length === WEEK_DAYS.length) {
            return 'Every day';
        }
        return repeatList.map((day) => getDayMinText(day)).join(', ');
    }, [repeatList]);

    return (
        <PageDialogBody>
            <ColorPickerControlled
                className="mb-4"
                name="color"
                control={form.control}
            />
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                            setScreen(AddHabitScreenEnum.IconsScreen)
                        }
                    >
                        {icon ? createElement(ICONS_MAP[icon]) : '?'}
                    </Button>
                    <InputControlled
                        className="flex-1"
                        placeholder={t('HABIT_NAME')}
                        control={form.control}
                        name="name"
                        autoComplete="off"
                    />
                </div>
                <TextareaControlled
                    placeholder={t('HABIT_DESCRIPTION')}
                    control={form.control}
                    name="description"
                    autoComplete="off"
                />
                <PageButton
                    endIcon={<ChevronRight />}
                    description={repeatListText}
                    onClick={() => setScreen(AddHabitScreenEnum.RepeatScreen)}
                >
                    Repeat
                </PageButton>
                <PageButton
                    endIcon={<ChevronRight />}
                    description={startDateText}
                    onClick={() =>
                        setScreen(AddHabitScreenEnum.StartDateScreen)
                    }
                >
                    {t('HABIT_START_DATE')}
                </PageButton>
            </div>
        </PageDialogBody>
    );
};