import { InvoiceHeaderTitle } from "./InvoiceHeaderTitle/InvoiceHeaderTitle";
import { InvoiceFilterAndAddInvoice } from "./InvoiceFilterAndAddInvoice/InvoiceFilterAndAddInvoice";

const InvoiceComponentHeader = () => {
    return (
        <div className={'flex justify-between items-center mb-[65px]'}>
            <InvoiceHeaderTitle />
            <InvoiceFilterAndAddInvoice />
        </div>
    );
};

export { InvoiceComponentHeader };