import { TFunction } from 'i18next';
import { Control, FieldValues, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { PageDialogBody } from '@/components/custom';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { HabitRepeatTypeEnum } from '@/types';

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

interface RepeatScreenBodyProps<T extends FieldValues> {
    typeName: Path<T>;
    listName: Path<T>;
    control: Control<T>;
}

export const RepeatScreenBody = <T extends FieldValues>({
    typeName,
    listName,
    control,
}: RepeatScreenBodyProps<T>) => {
    const { t } = useTranslation('habits');

    const repeatTypes = getRepeatTypes(t);

    return (
        <PageDialogBody>
            <TabsControlled name={typeName} control={control}>
                <TabsList className="mb-3 grid w-full grid-cols-2">
                    {repeatTypes.map(({ id, name, disabled }) => (
                        <TabsTrigger key={id} value={id} disabled={disabled}>
                            {name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value={HabitRepeatTypeEnum.DAILY}>
                    <WeekDayPickerControlled
                        control={control}
                        name={listName}
                    />
                </TabsContent>
            </TabsControlled>
        </PageDialogBody>
    );
};
