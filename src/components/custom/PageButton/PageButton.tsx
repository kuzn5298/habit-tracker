import { cva } from 'class-variance-authority';

import { Button, ButtonProps } from '@/components/ui';
import { cn } from '@/utils';

const buttonVariants = cva(
    'flex min-h-11 items-center justify-between px-4 py-2',
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

interface PageButtonProps extends ButtonProps {
    size?: 'sm' | 'default';
    endIcon?: React.ReactElement;
    description?: string;
}

const PageButton: React.FC<PageButtonProps> = ({
    className,
    children,
    endIcon,
    size,
    description,
    ...props
}) => {
    return (
        <Button
            variant="outline"
            className={cn(buttonVariants({ size, className }))}
            {...props}
        >
            <span className="flex flex-1 flex-col items-start overflow-hidden ">
                <span className="w-full truncate text-left text-base font-medium">
                    {children}
                </span>
                {description && (
                    <span className="w-full truncate text-left text-sm text-muted-foreground">
                        {description}
                    </span>
                )}
            </span>
            {endIcon}
        </Button>
    );
};

export default PageButton;
