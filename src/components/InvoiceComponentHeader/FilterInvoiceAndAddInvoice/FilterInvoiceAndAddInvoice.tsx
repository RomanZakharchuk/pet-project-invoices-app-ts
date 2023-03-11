import { FC, useState } from "react";

import style from './FilterInvoiceAndAddInvoice.module.scss';
import { ArrowDownSvg, ArrowUpSvg, PlusSvg } from "../../icons";
import { useAppDispatch } from "../../../hooks/redux.hook";
import { invoiceActions } from "../../../redux/slices/invoice.slice";
import { FilterModalWindow } from "./FilterModalWindow";

const FilterInvoiceAndAddInvoice: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const openModalCreateInvoice = (): void => {
        dispatch(invoiceActions.showModalCreateInvoice(true));
    };

    return (
        <div className={style.InvoiceFilterAndAddInvoice}>
            <div onClick={() => setIsOpen(!isOpen)} className={style.InvoiceFilterBlock}>
                <span>Filter by status</span>
                {isOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
                {isOpen && <FilterModalWindow />}
            </div>

            <button
                type={'button'}
                className={style.Btn}
                onClick={openModalCreateInvoice}
            >New Invoice
                <PlusSvg className={style.PlusSvg} />
            </button>
        </div>
    );
};

export { FilterInvoiceAndAddInvoice };