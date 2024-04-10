import { DialogProps } from '../../types';

const DesktopDialog: React.FC<DialogProps> = ({ header, body, footer }) => {
    return (
        <>
            {header}
            {body}
            {footer}
        </>
    );
};

export default DesktopDialog;
