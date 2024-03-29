import { cloneElement } from 'react';

import { SpinnerIcon } from '@/components/icons';
import { Button, ButtonProps } from '@/components/ui';

interface SocialButtonProps extends ButtonProps {
    icon?: JSX.Element;
    isLoading?: boolean;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
    icon = null,
    isLoading = false,
    children,
    disabled,
    ...props
}) => {
    return (
        <Button
            variant="outline"
            type="button"
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <SpinnerIcon className="mr-2 size-4 animate-spin" />
            ) : (
                icon && cloneElement(icon, { className: 'mr-2 size-4' })
            )}{' '}
            {children}
        </Button>
    );
};
