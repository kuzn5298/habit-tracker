import { DialogBodyProps } from '../../types';

const DesktopDialogBody: React.FC<DialogBodyProps> = ({ children }) => {
    return <div className="h-full overflow-hidden">{children}</div>;
};

export default DesktopDialogBody;
