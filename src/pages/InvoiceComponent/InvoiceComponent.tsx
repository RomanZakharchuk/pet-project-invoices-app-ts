import { InvoiceComponentHeader, Invoices } from "../../components";

const InvoiceComponent = () => {
    return (
        <div className={'mt-[74px]'}>
            <InvoiceComponentHeader />
            <Invoices />
        </div>
    );
};

export { InvoiceComponent };