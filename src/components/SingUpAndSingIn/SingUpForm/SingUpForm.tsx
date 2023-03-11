import { FC } from "react";
import { useForm } from "react-hook-form";

import style from '../SingInAndSingUpForms.module.scss';
import { useAuth } from "../../../hooks/useAuth";
import { BtnsBlock } from "../BtnsBlock";
import { Title } from "../Title";
import { EmailBlock } from "../EmailBlock";
import { PasswordBlock } from "../PasswordBlock";
import { ConfirmPasswordBlock } from "../ConfirmPasswordBlock";
import { ErrorsSingUpBlock } from "../ErrorsBlock";

interface IDataForm {
    email: string;
    password: string;
    confirmPassword: string;
}

const SingUpForm: FC = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<IDataForm>();
    const { signUp } = useAuth();

    const submit = (data: IDataForm) => {
        const email = data.email;
        const password = data.confirmPassword;

        signUp(email, password);

        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={style.Form}>
            <Title title={'Sing up'} />

            <div className={style.EmailWrapper}>
                <EmailBlock errors={errors} register={register} />
            </div>

            <div className={style.PasswordWrapper}>
                <PasswordBlock errors={errors} register={register} />
            </div>

            <div className={style.PasswordWrapper}>
                <ConfirmPasswordBlock errors={errors} register={register} watch={watch} />
                <ErrorsSingUpBlock errors={errors} />
            </div>

            <BtnsBlock
                link={'/dashboard'}
                nameBtn={'Sing up'}
                nameLink={'Sing in'}
            />
        </form>
    );
};

export { SingUpForm };