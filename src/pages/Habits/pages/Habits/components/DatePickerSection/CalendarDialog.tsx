import { useState } from 'react';
import { CalendarFold } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
    Button,
    Calendar,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui';
import { formatDate } from '@/libs/date';

interface CalendarDialogProps {
    date: string;
    onChange?: (date: string) => void;
}

export const CalendarDialog: React.FC<CalendarDialogProps> = ({
    date,
    onChange,
}) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleChange = (e?: Date) => {
        if (e) {
            const newDate = formatDate(e, 'YYYY-MM-DD');
            onChange?.(newDate);
        }
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <CalendarFold className="size-6" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[324px]">
                <DialogHeader>
                    <DialogTitle>{t('SELECT_DATE')}</DialogTitle>
                    <DialogDescription />
                </DialogHeader>
                <div className="flex justify-center">
                    <Calendar
                        mode="single"
                        selected={new Date(date)}
                        onSelect={handleChange}
                        defaultMonth={new Date(date)}
                        fixedWeeks
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
