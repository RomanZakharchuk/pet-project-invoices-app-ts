import { FC } from "react";

import style from './Input.module.scss';

interface IProps {
    label: string;
    inputId: string;
}

const Input: FC<IProps> = (props) => {
    const { inputId, label } = props;

    return (
        <>
            <label className={style.Label} htmlFor={inputId}>{label}</label>
            <input
                className={style.Input}
                id={inputId}
                type="text"
            />
        </>
    );
};

export { Input };