import { DialogProps } from '../../types';

const MobileDialog: React.FC<DialogProps> = ({ header, body, footer }) => {
    return (
        <>
            {header}
            {body}
            {footer}
        </>
    );
};

export default MobileDialog;
