import { PageDialog } from '@/components/custom';

import {
    RepeatScreenBody,
    RepeatScreenFooter,
    RepeatScreenHeader,
} from './components';

const RepeatScreen: React.FC = () => {
    return (
        <PageDialog
            header={<RepeatScreenHeader />}
            body={<RepeatScreenBody />}
            footer={<RepeatScreenFooter />}
        />
    );
};

export default RepeatScreen;
