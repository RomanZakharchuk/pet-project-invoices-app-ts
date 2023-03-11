import { FC } from "react";

import style from './CreateInvoiceBtnGroup.module.scss';
import { useAppDispatch } from "../../../hooks/redux.hook";
import { invoiceActions } from "../../../redux/slices/invoice.slice";

const CreateInvoiceBtnGroup: FC = () => {
    const dispatch = useAppDispatch();

    const openModalCreateInvoice = (): void => {
        dispatch(invoiceActions.showModalCreateInvoice(false));
    };

    return (
        <div className={style.CreateInvoiceBtnGroup}>
            <button
                onClick={openModalCreateInvoice}
                className={style.BtnDiscard}
                type={'button'}>
                Discard
            </button>

            <div className={style.BtnsSaveBlock}>
                <div>Save as Draft</div>
                <div>Save & Send</div>
            </div>
        </div>
    );
};

export { CreateInvoiceBtnGroup };