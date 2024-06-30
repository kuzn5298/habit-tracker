import { PageDialogHeader } from '@/components/custom';

interface StartDateScreenHeaderProps {
    title?: string;
}

export const StartDateScreenHeader: React.FC<StartDateScreenHeaderProps> = ({
    title,
}) => {
    return <PageDialogHeader title={title} />;
};
