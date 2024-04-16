import { PageDialog, usePageDialog } from '@/components/custom';
import { cn } from '@/utils';

import {
    StartDateScreenBody,
    StartDateScreenFooter,
    StartDateScreenHeader,
} from './components';

const StartDateScreen: React.FC = () => {
    const { isMobile } = usePageDialog();

    return (
        <PageDialog
            className={cn(isMobile ? 'h-auto' : 'max-w-xs')}
            header={<StartDateScreenHeader />}
            body={<StartDateScreenBody />}
            footer={<StartDateScreenFooter />}
        />
    );
};

export default StartDateScreen;
