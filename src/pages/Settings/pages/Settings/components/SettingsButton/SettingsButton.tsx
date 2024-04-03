import { Button, ButtonProps } from '@/components/ui';
import { cn } from '@/utils/ui';

interface SettingsButtonProps extends ButtonProps {
    endIcon?: React.ReactElement;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({
    className,
    children,
    endIcon,
    ...props
}) => {
    return (
        <Button
            variant="outline"
            className={cn(
                'flex justify-between items-center gap-4 p-4 min-h-16 text-base',
                className
            )}
            {...props}
        >
            {children}
            {endIcon}
        </Button>
    );
};

export default SettingsButton;
