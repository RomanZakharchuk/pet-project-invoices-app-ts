import React from 'react';
import { InvoiceItem } from "./InvoiceItem/InvoiceItem";
import { InvoicesWarningsAboutEmpty } from "./InvoicesWarningsAboutEmpty/InvoicesWarningsAboutEmpty";

const Invoices = () => {
    return (
        <div className={'flex flex-col items-center'}>
            <InvoicesWarningsAboutEmpty />
        </div>
    );
};

export { Invoices };