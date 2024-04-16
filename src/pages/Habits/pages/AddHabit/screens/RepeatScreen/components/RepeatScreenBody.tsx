import { useMemo } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { PageDialogBody } from '@/components/custom';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { HabitRepeatTypeEnum } from '@/types';

import { useAddHabit } from '../../../hooks';
import { TabsControlled, WeekDayPickerControlled } from './form';

const getRepeatTypes = (t: TFunction) => [
    {
        id: HabitRepeatTypeEnum.DAILY,
        name: t('habits:HABIT_REPEAT_DAYS'),
    },
    {
        id: HabitRepeatTypeEnum.MONTHLY,
        name: t('habits:HABIT_REPEAT_MONTHS'),
        disabled: true,
    },
];

export const RepeatScreenBody: React.FC = () => {
    const { form } = useAddHabit();
    const { t } = useTranslation('habits');

    const repeatTypes = useMemo(() => getRepeatTypes(t), [t]);

    return (
        <PageDialogBody>
            <TabsControlled name="repeatType" control={form.control}>
                <TabsList className="mb-3 grid w-full grid-cols-2">
                    {repeatTypes.map(({ id, name, disabled }) => (
                        <TabsTrigger key={id} value={id} disabled={disabled}>
                            {name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value={HabitRepeatTypeEnum.DAILY}>
                    <WeekDayPickerControlled
                        control={form.control}
                        name="repeatList"
                    />
                </TabsContent>
            </TabsControlled>
        </PageDialogBody>
    );
};
