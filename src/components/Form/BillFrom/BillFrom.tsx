import { FC } from "react";

import { Input } from "../Input/Input";
import { BillTitle } from "../BillTitle/BillTitle";

const BillFrom: FC = () => {
    return (
        <>
            <BillTitle name={'Bill From'} />
            <div className={'mb-[24px]'}>
                <Input inputId={'addressFrom'} label={'Street Address'} />
            </div>
            <div>
                <div>
                    <Input inputId={'cityFrom'} label={'City'} />
                </div>
                <div>
                    <Input inputId={'postCodeFrom'} label={'Post Code'} />
                </div>
                <div>
                    <Input inputId={'countryFrom'} label={'Country'} />
                </div>
            </div>
        </>
    );
};

export { BillFrom };