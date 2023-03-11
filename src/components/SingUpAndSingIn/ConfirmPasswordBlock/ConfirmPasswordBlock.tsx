import { FC } from "react";

import style from '../EmailPassConfirmPassBlock.module.scss';

interface IProps {
    errors: any;
    register: any;
    watch: any;
}

const ConfirmPasswordBlock: FC<IProps> = ({ errors, register, watch }) => {
    return (
        <>
            <div className={style.LabelContainer}>
                <label htmlFor="confirmPassword" className={style.Label}>Confirm password:</label>
                <span
                    className={style.ErrorMessage}>
                        {errors.confirmPassword?.type === 'required' ? errors.confirmPassword.message : null}
                    </span>
            </div>
            <input
                {...register('confirmPassword', {
                    required: `can't be empty`,
                    minLength: {
                        value: 6,
                        message: 'Password should be longer than 6 characters'
                    },
                    maxLength: {
                        value: 20,
                        message: 'Password should be shorter than 20 characters'
                    },
                    validate: (val: string) => {
                        if (watch('password') !== val) {
                            return "Your passwords do no match"
                        }
                    }
                })}
                id={'confirmPassword'}
                className={style.Input}
                placeholder={'Confirm password'}
                type="password" />
        </>
    );
};

export { ConfirmPasswordBlock };