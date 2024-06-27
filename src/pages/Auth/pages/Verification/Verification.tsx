import { ViewLoading } from '@/components/custom';

import { useVerification } from './hook';

const Verification: React.FC = () => {
    const { isLoading } = useVerification();

    if (isLoading) {
        return <ViewLoading />;
    }

    return null;
};

export default Verification;
