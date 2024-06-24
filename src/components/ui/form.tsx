import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    useFormContext,
} from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { cn } from '@/utils/ui';

const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
);

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    const value = React.useMemo(() => ({ name: props.name }), [props.name]);
    return (
        <FormFieldContext.Provider value={value}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

type FormItemContextValue = {
    id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue
);

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

const FormItem: React.FC<FormItemProps> = ({ className, ref, ...props }) => {
    const id = React.useId();

    const value = React.useMemo(() => ({ id }), [id]);

    return (
        <FormItemContext.Provider value={value}>
            <div ref={ref} className={cn('space-y-2', className)} {...props} />
        </FormItemContext.Provider>
    );
};
FormItem.displayName = 'FormItem';

interface FormLabelProps
    extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    ref?: React.Ref<React.ElementRef<typeof LabelPrimitive.Root>>;
}

const FormLabel: React.FC<FormLabelProps> = ({ className, ref, ...props }) => {
    const { error, formItemId } = useFormField();

    return (
        <Label
            ref={ref}
            className={cn(error && 'text-destructive', className)}
            htmlFor={formItemId}
            {...props}
        />
    );
};
FormLabel.displayName = 'FormLabel';

interface FormControlProps extends React.ComponentPropsWithoutRef<typeof Slot> {
    ref?: React.Ref<React.ElementRef<typeof Slot>>;
}

const FormControl: React.FC<FormControlProps> = ({ ref, ...props }) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
        useFormField();

    return (
        <Slot
            ref={ref}
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
            {...props}
        />
    );
};
FormControl.displayName = 'FormControl';

interface FormDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    ref?: React.Ref<HTMLParagraphElement>;
}

const FormDescription: React.FC<FormDescriptionProps> = ({
    className,
    ref,
    ...props
}) => {
    const { formDescriptionId } = useFormField();

    return (
        <p
            ref={ref}
            id={formDescriptionId}
            className={cn('text-sm text-muted-foreground', className)}
            {...props}
        />
    );
};
FormDescription.displayName = 'FormDescription';

interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    ref?: React.Ref<HTMLParagraphElement>;
}

const FormMessage: React.FC<FormMessageProps> = (
    { className, children, ...props },
    ref
) => {
    const { error, formMessageId } = useFormField();
    const body = error?.message ?? children;

    if (!body) {
        return null;
    }

    return (
        <p
            ref={ref}
            id={formMessageId}
            className={cn('text-sm font-medium text-destructive', className)}
            {...props}
        >
            {body}
        </p>
    );
};

FormMessage.displayName = 'FormMessage';

export {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
};
