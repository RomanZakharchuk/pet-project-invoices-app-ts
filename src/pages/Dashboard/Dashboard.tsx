import { FC } from "react";

import { Content, ModalInvoice, SideBar } from "../../components";
import { useAppSelector } from "../../hooks/redux.hook";

const Dashboard: FC = () => {
    const modalCreateInvoice = useAppSelector(state => state?.invoices?.modalCreateInvoice);

    return (
        <div className='flex bg-whisper relative'>
            <SideBar />
            <Content />
            {modalCreateInvoice && <ModalInvoice />}
        </div>
    );
};

export { Dashboard };