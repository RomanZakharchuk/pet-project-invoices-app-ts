import { FC } from "react";

import style from './InvoiceComponent.module.scss';
import { InvoiceComponentHeader } from "../../components/InvoiceComponentHeader";
import { Invoices } from "../../components/Invoices";

const InvoiceComponent: FC = () => {
    return (
        <div className={style.InvoiceComponent}>
            <InvoiceComponentHeader />
            <Invoices />
        </div>
    );
};

export { InvoiceComponent };