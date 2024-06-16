import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/utils/ui';

const Tabs = TabsPrimitive.Root;

export type TabsProps = React.ComponentPropsWithoutRef<
    typeof TabsPrimitive.Root
>;

interface TabsListProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
    ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.List>>;
}

const TabsList: React.FC<TabsListProps> = ({ className, ref, ...props }) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
            className
        )}
        {...props}
    />
);
TabsList.displayName = TabsPrimitive.List.displayName;

interface TabsTriggerProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
    ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.Trigger>>;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({
    className,
    ref,
    ...props
}) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
            className
        )}
        {...props}
    />
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

interface TabsContentProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
    ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.Content>>;
}

const TabsContent: React.FC<TabsContentProps> = ({
    className,
    ref,
    ...props
}) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(
            'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
