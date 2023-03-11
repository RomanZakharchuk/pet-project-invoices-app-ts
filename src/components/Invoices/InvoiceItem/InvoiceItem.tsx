import { FC } from "react";

import style from './InvoiceItem.module.scss';
import { ArrowRightSvg } from "../../icons";

const InvoiceItem: FC = () => {
    return (
        <div className={style.InvoiceItem}>
            <div className={style.InvoiceIdBlock}>
                <span>#</span>
                <span>RT3080</span>
            </div>
            <span className={style.InvoiceDate}>Due  19 Aug 2021</span>
            <span className={style.InvoiceUserName}>Jensen Huang</span>
            <span className={style.InvoicePrice}>£ 1,800.90</span>
            <div className={style.InvoicePaymentStatusBlock}>
                <span></span>
                <span>Paid</span>
            </div>
            <ArrowRightSvg />
        </div>
    );
};

export { InvoiceItem };