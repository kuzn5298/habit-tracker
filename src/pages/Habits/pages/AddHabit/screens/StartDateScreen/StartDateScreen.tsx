import { PageDialog } from '@/components/custom';

import {
    StartDateScreenBody,
    StartDateScreenFooter,
    StartDateScreenHeader,
} from './components';

const StartDateScreen: React.FC = () => {
    return (
        <PageDialog
            header={<StartDateScreenHeader />}
            body={<StartDateScreenBody />}
            footer={<StartDateScreenFooter />}
        />
    );
};

export default StartDateScreen;
