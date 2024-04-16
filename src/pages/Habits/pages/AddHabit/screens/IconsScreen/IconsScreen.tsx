import { PageDialog } from '@/components/custom';

import {
    IconsScreenBody,
    IconsScreenFooter,
    IconsScreenHeader,
} from './components';

const IconsScreen: React.FC = () => {
    return (
        <PageDialog
            header={<IconsScreenHeader />}
            body={<IconsScreenBody />}
            footer={<IconsScreenFooter />}
        />
    );
};

export default IconsScreen;
