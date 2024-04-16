import { cn } from '@/utils';

export interface ColorPickerItemProps
    extends Omit<
        React.HTMLAttributes<HTMLButtonElement>,
        'value' | 'onChange'
    > {
    value?: string;
    checked?: boolean;
    noColor?: boolean;
    color?: string;
    onChange?: (value?: string) => void;
}

export const ColorPickerItem: React.FC<ColorPickerItemProps> = ({
    checked,
    value,
    onChange,
    color,
    noColor,
    style,
    ...props
}) => {
    return (
        <button
            type="button"
            role="radio"
            aria-checked="true"
            data-state="checked"
            className={cn(
                'flex items-center justify-center border-2 p-0.5 border-transparent aspect-square size-8 rounded-full',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',
                color && `text-[${color}]`,
                checked && !noColor && 'border-current',
                checked && noColor && 'border-destructive'
            )}
            tabIndex={0}
            onClick={() => onChange?.(value)}
            style={{ color, ...style }}
            {...props}
        >
            <div
                className={cn(
                    'size-full rounded-full bg-current',
                    noColor &&
                        'relative bg-transparent border-destructive border-2',
                    noColor &&
                        'before:absolute before:h-0.5 before:w-full before:bg-destructive before:rotate-45 before:top-1/2 before:left-0 before:-translate-y-1/2'
                )}
            />
        </button>
    );
};
