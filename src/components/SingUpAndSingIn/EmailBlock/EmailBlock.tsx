import { FC } from "react";

import style from '../EmailPassConfirmPassBlock.module.scss';

interface IProps {
    errors: any;
    register: any;
}

const EmailBlock: FC<IProps> = ({ errors, register }) => {
    return (
        <>
            <div className={style.LabelContainer}>
                <label htmlFor="email" className={style.Label}>Email:</label>
                <span className={style.ErrorMessage}>
                    {errors.email?.type === 'required' ? errors.email.message : null}
                </span>
            </div>
            <input
                {...register('email', {
                    required: `Can't be empty`,
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Invalid email'
                    },
                })}
                id={'email'}
                className={style.Input}
                placeholder={'Email'}
                type="text" />
        </>
    );
};

export { EmailBlock };