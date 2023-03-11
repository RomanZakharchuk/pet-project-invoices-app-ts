import { FC } from 'react';

import style from './PaymentTerms.module.scss';
import { ArrowDownSvg } from "../../icons";

const PaymentTerms: FC = () => {
    return (
        <div className={style.PaymentTerms}>
            <span className={style.Label}>Payment Terms</span>
            <div className={style.DaysPicker}>
                <span>Next 30 Days</span>
                <ArrowDownSvg />
            </div>
        </div>
    );
};

export { PaymentTerms };