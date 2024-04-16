import { DialogBodyProps } from '../../types';

const MobileDialogBody: React.FC<DialogBodyProps> = ({ children }) => {
    return (
        <div className="h-full overflow-y-auto overflow-x-hidden px-4">
            {children}
        </div>
    );
};

export default MobileDialogBody;
