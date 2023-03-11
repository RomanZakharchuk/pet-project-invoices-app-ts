import { FC } from "react";

import style from './BillFromBlock.module.scss';
import { Input } from "../Input";
import { BillTitle } from "../BillTitle";
import { AddressBlock } from "../AddressBlock";

const BillFromBlock: FC = () => {
    return (
        <div className={style.BillFromBlock}>
            <BillTitle name={'Bill From'} />

            <div className={style.StreetAddressBlock}>
                <Input inputId={'addressFrom'} label={'Street Address'} />
            </div>

            <AddressBlock />
        </div>
    );
};

export { BillFromBlock };