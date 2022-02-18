import React, {Dispatch, SetStateAction} from 'react';
import styles from "./modal.module.css"

type ModalPropsType = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalPropsType> = ({children, visible, setVisible}) => {

    const rootClass = [styles.modal]
    if (visible) {
        rootClass.push(styles.active)
    }

    return (
        <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
            <div className={styles.modalContainer} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;