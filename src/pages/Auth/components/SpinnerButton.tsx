import * as React from 'react';

import { SpinnerIcon } from '@/components/icons';
import { Button, ButtonProps } from '@/components/ui';

export interface SpinnerButtonProps extends ButtonProps {
    isLoading?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
    startIcon?: JSX.Element;
}

export const SpinnerButton: React.FC<SpinnerButtonProps> = ({
    ref,
    isLoading,
    disabled,
    children,
    startIcon,
    ...props
}) => (
    <Button disabled={isLoading || disabled} ref={ref} {...props}>
        {isLoading ? (
            <SpinnerIcon className="mr-2 size-4 animate-spin" />
        ) : (
            startIcon &&
            React.cloneElement(startIcon, { className: 'mr-2 size-4' })
        )}
        {children}
    </Button>
);
