import { PageDialogHeader } from '@/components/custom';

interface RepeatScreenHeaderProps {
    title?: string;
}

export const RepeatScreenHeader: React.FC<RepeatScreenHeaderProps> = ({
    title,
}) => {
    return <PageDialogHeader title={title} />;
};
