import { FC } from "react";

import style from './ModalInvoice.module.scss';
import { FormCreateInvoice } from "../Forms";

const ModalInvoice: FC = () => {
    return (
        <div className={style.ModalInvoice}>
            <div className={style.ModalInvoiceInner}>
                <h2 className={style.Title}>New Invoice</h2>
                <FormCreateInvoice />
            </div>
        </div>
    );
};

export { ModalInvoice };