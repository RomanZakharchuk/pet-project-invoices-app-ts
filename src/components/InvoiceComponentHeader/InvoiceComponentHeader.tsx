import { FC } from "react";

import style from './InvoiceComponentHeader.module.scss';
import { InvoiceHeaderTitle } from "./InvoiceHeaderTitle";
import { FilterInvoiceAndAddInvoice } from "./FilterInvoiceAndAddInvoice";

const InvoiceComponentHeader: FC = () => {
    return (
        <div className={style.InvoiceComponentHeader}>
            <InvoiceHeaderTitle />
            <FilterInvoiceAndAddInvoice />
        </div>
    );
};

export { InvoiceComponentHeader };