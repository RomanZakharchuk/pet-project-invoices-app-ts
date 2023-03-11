import { FC } from "react";

import style from './FormCreateInvoice.module.scss';
import { BillFromBlock } from "./BillFromBlock";
import { BillToBlock } from "./BillToBlock";
import { DataPickerBlock } from "./DataPickerBlock";
import { CreateInvoiceBtnGroup } from "./CreateInvoiceBtnsGroup";

const FormCreateInvoice: FC = () => {
    return (
        <form className={style.FormCreateInvoice}>
            <BillFromBlock />
            <BillToBlock />
            <DataPickerBlock />

            <div>
                <span>Item List</span>
            </div>

            <CreateInvoiceBtnGroup />
        </form>
    );
};

export { FormCreateInvoice };