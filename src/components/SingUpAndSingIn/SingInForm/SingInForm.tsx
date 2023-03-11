import { FC } from "react";
import { useForm } from "react-hook-form";

import style from '../SingInAndSingUpForms.module.scss';
import { useAuth } from "../../../hooks/useAuth";
import { BtnsBlock } from "../BtnsBlock";
import { EmailBlock } from "../EmailBlock";
import { PasswordBlock } from "../PasswordBlock";
import { ErrorsSingInBlock } from "../ErrorsBlock";
import { Title } from "../Title";

interface IDataForm {
    email: string;
    password: string;
}

const SingInForm: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IDataForm>();
    const { signIn, error, setError } = useAuth();

    const submit = (data: IDataForm) => {
        const email = data.email;
        const password = data.password;

        setError(null);
        signIn(email, password);

        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={style.Form}>
            <Title title={'Sing in'} />

            <div className={style.EmailWrapper}>
                <EmailBlock errors={errors} register={register} />
            </div>

            <div className={style.PasswordWrapper}>
                <PasswordBlock errors={errors} register={register} />
                <ErrorsSingInBlock errors={errors} error={error} />
            </div>

            <BtnsBlock
                nameBtn={'Sing in'}
                nameLink={'Sing up'}
                link={'/dashboard/registration'}
            />
        </form>
    );
};

export { SingInForm };