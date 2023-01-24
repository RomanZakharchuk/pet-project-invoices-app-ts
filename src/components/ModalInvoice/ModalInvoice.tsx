import { FC } from "react";

import { Form } from "../Form/Form";

const ModalInvoice: FC = () => {
    return (
        <div className={'modal-invoice'}>
            <div className={'relative top-0 left-[0] z-[1] w-[719px] h-screen bg-white rounded-r-[20px] pl-[103px] '}>
                <Form />
            </div>
        </div>
    );
};

export { ModalInvoice };