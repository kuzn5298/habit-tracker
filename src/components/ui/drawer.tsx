import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/utils/ui';

const Drawer = ({
    shouldScaleBackground = true,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
    <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
    />
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

interface DrawerOverlayProps
    extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {
    ref?: React.Ref<React.ElementRef<typeof DrawerPrimitive.Overlay>>;
}

const DrawerOverlay: React.FC<DrawerOverlayProps> = ({
    className,
    ref,
    ...props
}) => (
    <DrawerPrimitive.Overlay
        ref={ref}
        className={cn('fixed inset-0 z-50 bg-black/80', className)}
        {...props}
    />
);
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

interface DrawerContentProps
    extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
    ref?: React.Ref<React.ElementRef<typeof DrawerPrimitive.Content>>;
}

const DrawerContent: React.FC<DrawerContentProps> = ({
    className,
    children,
    ref,
    ...props
}) => (
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
            ref={ref}
            className={cn(
                'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
                className
            )}
            {...props}
        >
            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
            {children}
        </DrawerPrimitive.Content>
    </DrawerPortal>
);
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
        {...props}
    />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('mt-auto flex flex-col gap-2 p-4', className)}
        {...props}
    />
);
DrawerFooter.displayName = 'DrawerFooter';

interface DrawerTitleProps
    extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> {
    ref?: React.Ref<React.ElementRef<typeof DrawerPrimitive.Title>>;
}

const DrawerTitle: React.FC<DrawerTitleProps> = ({
    className,
    ref,
    ...props
}) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn(
            'text-lg font-semibold leading-none tracking-tight',
            className
        )}
        {...props}
    />
);
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

interface DrawerDescriptionProps
    extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> {
    ref?: React.Ref<React.ElementRef<typeof DrawerPrimitive.Description>>;
}

const DrawerDescription: React.FC<DrawerDescriptionProps> = ({
    className,
    ref,
    ...props
}) => (
    <DrawerPrimitive.Description
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
);
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerPortal,
    DrawerTitle,
    DrawerTrigger,
};
