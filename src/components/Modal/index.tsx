import { ReactComponent as CrossIcon } from 'assets/images/icons/cross.svg';
import * as React from 'react';
import ReactModal, { ModalProps } from 'react-responsive-modal';

export const Modal: React.FC<ModalProps & { onClose?: () => void }> = React.memo((props) => {
    return (
        <ReactModal
            classNames={props.classNames}
            styles={{
                modal: {
                    borderRadius: 4,
                    height: 'auto',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 37, 105, 0.39)',
                },
                root: {
                    fontFamily: "'Roboto', sans-serif",
                },
            }}
            closeIcon={<CrossIcon onClick={props.onClose} />}
            center
            {...props}
        >
            {props.children}
        </ReactModal>
    );
});
