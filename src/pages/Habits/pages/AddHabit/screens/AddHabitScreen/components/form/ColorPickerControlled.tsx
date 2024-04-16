import { Control, FieldValues, Path } from 'react-hook-form';

import {
    ColorPickerGroup,
    ColorPickerGroupProps,
    ColorPickerItem,
} from '@/components/custom';
import { FormField } from '@/components/ui';
import { COLORS_MAP } from '@/constants';

interface ColorPickerControlProps<T extends FieldValues>
    extends ColorPickerGroupProps {
    name: Path<T>;
    control: Control<T>;
}

export const ColorPickerControlled = <T extends FieldValues>({
    name,
    control,
    ...props
}: ColorPickerControlProps<T>) => {
    return (
        <FormField
            render={({ field: { value, onChange } }) => (
                <ColorPickerGroup {...props} value={value} onChange={onChange}>
                    <ColorPickerItem noColor />
                    {Object.entries(COLORS_MAP).map(([key, color]) => (
                        <ColorPickerItem key={key} value={key} color={color} />
                    ))}
                </ColorPickerGroup>
            )}
            control={control}
            name={name}
        />
    );
};
