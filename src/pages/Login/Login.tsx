import { FC } from "react";

import style from './Login.module.scss';
import { SingInForm } from '../../components/SingUpAndSingIn/SingInForm';

const Login: FC = () => {
    return (
        <div className={style.Login}>
            <SingInForm />
        </div>
    );
};

export { Login };