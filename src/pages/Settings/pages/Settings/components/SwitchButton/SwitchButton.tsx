import { Switch } from '@/components/ui';
import { cn } from '@/utils/ui';

interface SwitchButtonProps {
    children?: React.ReactNode;
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
    className,
    children,
    onChange,
    ...props
}) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 rounded-md border p-4 min-h-16',
                className
            )}
        >
            <div className="flex-1 text-base">{children}</div>
            <Switch onCheckedChange={onChange} {...props} />
        </div>
    );
};

export default SwitchButton;
