import { FC } from "react";

import { ArrowDownSvg, PlusSvg } from "../../../svg-components";
import { useAppDispatch } from "../../../hooks/redux.hook";
import { invoiceActions } from "../../../redux/slices/invoice.slice";

const InvoiceFilterAndAddInvoice: FC = () => {
    const dispatch = useAppDispatch();

    const openModalCreateInvoice = (): void => {
        dispatch(invoiceActions.showModalCreateInvoice(true));
    };

    return (
        <div className={'flex items-center'}>
            <div className={'flex flex-row items-center mr-[40px] cursor-pointer'}>
                <span className={'mr-[16px]'}>Filter by status</span>
                <ArrowDownSvg />
            </div>

            <div
                className={'btn pl-[56px] bg-cornflower-blue text-white relative cursor-pointer transition ease-in-out delay-50 hover:bg-heliotrope hover:delay-50'}
                onClick={openModalCreateInvoice}
            >New
                Invoice
                <PlusSvg className={'absolute top-[9px] left-[8px]'} />
            </div>
        </div>
    );
};

export { InvoiceFilterAndAddInvoice };