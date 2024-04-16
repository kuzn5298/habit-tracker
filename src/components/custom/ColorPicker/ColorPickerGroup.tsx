import React, { Children } from 'react';

import { cn } from '@/utils';

import { ColorPickerItem, ColorPickerItemProps } from './ColorPickerItem';

export interface ColorPickerGroupProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
    value?: string;
    onChange?: (value?: string) => void;
}

export const ColorPickerGroup: React.FC<ColorPickerGroupProps> = ({
    children,
    value,
    onChange,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                'flex flex-wrap justify-center gap-2 outline-none',
                className
            )}
            role="radiogroup"
            aria-required="false"
            tabIndex={0}
            {...props}
        >
            {Children.map(children, (child) => {
                if (
                    React.isValidElement(child) &&
                    child.type === ColorPickerItem
                ) {
                    return React.cloneElement(
                        child as React.ReactElement<ColorPickerItemProps>,
                        {
                            checked:
                                child.props.checked ??
                                child.props.value === value,
                            onChange: child.props.onChange ?? onChange,
                        }
                    );
                }
                return child;
            })}
        </div>
    );
};
