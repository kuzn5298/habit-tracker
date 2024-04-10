import { cva } from 'class-variance-authority';

import { Button, ButtonProps } from '@/components/ui';
import { cn } from '@/utils';

const buttonVariants = cva(
    'flex min-h-11 items-center justify-between px-4 py-2 text-base',
    {
        variants: {
            size: {
                default: 'h-16 gap-4',
                sm: 'h-11 gap-2',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

interface SettingsButtonProps extends ButtonProps {
    size?: 'sm' | 'default';
    endIcon?: React.ReactElement;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({
    className,
    children,
    endIcon,
    size,
    ...props
}) => {
    return (
        <Button
            variant="outline"
            className={cn(buttonVariants({ size, className }))}
            {...props}
        >
            <span className="truncate">{children}</span>
            {endIcon}
        </Button>
    );
};

export default SettingsButton;
