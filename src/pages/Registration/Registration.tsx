import { FC } from "react";

import style from './Registration.module.scss';
import { SingUpForm } from "../../components/SingUpAndSingIn/SingUpForm";

const Registration: FC = () => {
    return (
        <div className={style.Registration}>
            <SingUpForm />
        </div>
    );
};

export { Registration };