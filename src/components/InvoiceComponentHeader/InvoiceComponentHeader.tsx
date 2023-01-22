import { InvoiceHeaderTitle } from "./InvoiceHeaderTitle/InvoiceHeaderTitle";
import { InvoiceAddAndFilter } from "./InvoiceAddAndFilter/InvoiceAddAndFilter";

const InvoiceComponentHeader = () => {
    return (
        <div className={'flex justify-between items-center mb-[65px]'}>
            <InvoiceHeaderTitle />
            <InvoiceAddAndFilter />
        </div>
    );
};

export { InvoiceComponentHeader };