import { FC } from "react";

import style from './InvoiceHeaderTitle.module.scss';

const InvoiceHeaderTitle: FC = () => {
    return (
        <div>
            <h1 className={style.Title}>Invoices</h1>
            <span className={style.NumberOfInvoices}>There are 7 invoices</span>
        </div>
    );
};

export { InvoiceHeaderTitle };