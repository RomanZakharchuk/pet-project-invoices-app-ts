import { FC } from "react";

import style from './DataPickerBlock.module.scss';
import { Input } from "../Input";
import { PaymentTerms } from "../PaymentTerms";
import { Calendar } from "../Calendar";

const DataPickerBlock: FC = () => {
    return (
        <div className={style.DataPickerBlock}>
            <div className={style.Wrapper}>
                <Calendar />
                <PaymentTerms />
            </div>

            <div>
                <Input inputId={'description'} label={'Project Description'} />
            </div>
        </div>
    );
};

export { DataPickerBlock };