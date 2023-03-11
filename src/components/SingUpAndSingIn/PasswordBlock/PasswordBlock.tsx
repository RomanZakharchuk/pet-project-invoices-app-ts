import { FC } from "react";

import style from '../EmailPassConfirmPassBlock.module.scss';

interface IProps {
    errors: any;
    register: any;
}

const PasswordBlock: FC<IProps> = ({ errors, register }) => {
    return (
        <>
            <div className={style.LabelContainer}>
                <label htmlFor="password" className={style.Label}>Password:</label>
                <span className={style.ErrorMessage}>
                    {errors.password?.type === 'required' ? errors.password.message : null}
                </span>
            </div>
            <input
                {...register('password', {
                    required: `Can't be empty`,
                    minLength: {
                        value: 6,
                        message: 'Password should be longer than 6 characters'
                    },
                    maxLength: {
                        value: 20,
                        message: 'Password should be shorter than 20 characters'
                    }
                })}
                id={'password'}
                className={style.Input}
                placeholder={'Password'}
                type="password" />
        </>
    );
};

export { PasswordBlock };