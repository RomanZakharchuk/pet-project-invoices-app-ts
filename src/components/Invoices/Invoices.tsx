import React, { useEffect, useState } from 'react';
import { InvoiceItem } from "./InvoiceItem/InvoiceItem";
import { InvoicesWarningsAboutEmpty } from "./InvoicesWarningsAboutEmpty/InvoicesWarningsAboutEmpty";
import { useAppSelector } from "../../hooks/redux.hook";

const Invoices = () => {
    const invoices = useAppSelector(state => state?.invoices?.invoices);
    const [isInvoice, setIsInvoice] = useState<boolean>(false);

    useEffect(() => {
        if (invoices.length === 0) {
            setIsInvoice(false);
        } else {
            setIsInvoice(true);
        }
    }, [invoices]);

    return (
        <div className={'flex flex-col items-center'}>
            {isInvoice ? <InvoiceItem /> : <InvoicesWarningsAboutEmpty />}
        </div>
    );
};

export { Invoices };