import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';
import { AppRouteEnum } from '@/constants';

const Verification: React.FC = () => {
    return (
        <div>
            <h2 className="scroll-m-20 border-b px-6 py-2 text-3xl font-semibold tracking-tight first:mt-0">
                Verification
            </h2>
            <div>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.LOGIN}>Login</Link>
                </Button>
            </div>
        </div>
    );
};

export default Verification;
