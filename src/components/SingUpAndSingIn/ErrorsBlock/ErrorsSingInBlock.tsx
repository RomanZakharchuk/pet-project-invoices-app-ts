import { FC } from "react";

import style from './ErrorsBlock.module.scss';

interface IProps {
    errors: any;
    error: any;
}

const ErrorsSingInBlock: FC<IProps> = ({ errors, error }) => {
    return (
        <>
            <p className={style.ErrorMessage}>
                {errors.email?.type === 'pattern' ? `- ${errors.email.message}` : null}
            </p>
            <p className={style.ErrorMessage}>
                {errors.password?.type === 'minLength' ? `- ${errors.password.message}` : null}
            </p>
            <p className={style.ErrorMessage}>
                {errors.password?.type === 'maxLength' ? `- ${errors.password.message}` : null}
            </p>
            {error && <p className={style.ErrorMessage}>
                {error?.message}
            </p>}
        </>
    );
};

export { ErrorsSingInBlock };