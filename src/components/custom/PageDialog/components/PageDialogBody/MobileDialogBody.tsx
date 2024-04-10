import { DialogBodyProps } from '../../types';

const MobileDialogBody: React.FC<DialogBodyProps> = ({ children }) => {
    return <div className="px-4">{children}</div>;
};

export default MobileDialogBody;
