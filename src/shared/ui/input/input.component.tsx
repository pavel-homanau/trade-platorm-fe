import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styles from './input.module.css';

type DefaultInputPropsType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { ref?: React.Ref<HTMLInputElement> };

const Input: React.ForwardRefExoticComponent<DefaultInputPropsType> = React.forwardRef((props, ref) => {
    return <input ref={ref} className={styles.input} {...props} />;
});

export default React.memo(Input);