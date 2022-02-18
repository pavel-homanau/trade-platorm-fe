import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<DefaultButtonPropsType> =({children, ...restProps}) => {
    return (
        <button {...restProps} className={styles.button}>
            {children}
        </button>
    );
};

export default  React.memo(Button);