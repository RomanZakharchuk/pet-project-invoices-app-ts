import { FC } from "react";

import style from './BillToBlock.module.scss';
import { Input } from "../Input";
import { BillTitle } from "../BillTitle";
import { AddressBlock } from "../AddressBlock";

const BillToBlock: FC = () => {
    return (
        <div className={style.BillToBlock}>
            <BillTitle name={'Bill To'} />

            <div className={style.ClientsItem}>
                <Input inputId={'name'} label={'Client’s Name'} />
            </div>
            <div className={style.ClientsItem}>
                <Input inputId={'email'} label={'Client’s Email'} />
            </div>
            <div className={style.ClientsItem}>
                <Input inputId={'addressTo'} label={'Street Address'} />
            </div>

            <AddressBlock />
        </div>
    );
};

export { BillToBlock };