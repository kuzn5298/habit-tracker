import { PageDialogHeader } from '@/components/custom';

interface IconsScreenHeaderProps {
    title?: string;
}

export const IconsScreenHeader: React.FC<IconsScreenHeaderProps> = ({
    title,
}) => {
    return <PageDialogHeader title={title} />;
};
