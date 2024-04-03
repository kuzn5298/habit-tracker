import { HTMLAttributes } from 'react';

import { cn } from '@/utils/ui';

export interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {}

const PageContainer: React.FC<PageContainerProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            'container flex flex-col gap-6 pt-12 pb-6 h-full overflow-hidden sm:pt-16 md:pt-[7.5rem]',
            className
        )}
        {...props}
    />
);

export default PageContainer;
