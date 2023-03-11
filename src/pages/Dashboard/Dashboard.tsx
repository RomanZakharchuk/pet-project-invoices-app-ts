import { FC } from "react";

import { useAppSelector } from "../../hooks/redux.hook";
import style from './Dashboard.module.scss';
import { Content } from "../../components/Content";
import { SideBar } from "../../components/SideBar";
import { ModalInvoice } from "../../components/ModalInvoice";

const Dashboard: FC = () => {
    const modalCreateInvoice = useAppSelector(state => state?.invoices?.modalCreateInvoice);

    return (
        <div className={style.Dashboard}>
            <SideBar />
            <Content />
            {modalCreateInvoice && <ModalInvoice />}
        </div>
    );
};

export { Dashboard };