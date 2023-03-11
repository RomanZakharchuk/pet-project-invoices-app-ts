import { FC } from "react";

import style from './ErrorsBlock.module.scss';

interface IProps {
    errors: any;
}

const ErrorsSingUpBlock: FC<IProps> = ({ errors }) => {
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
            <p className={style.ErrorMessage}>
                {errors.confirmPassword?.type === 'validate' ? `- ${errors.confirmPassword.message}` : null}
            </p>
        </>
    );
};

export { ErrorsSingUpBlock };