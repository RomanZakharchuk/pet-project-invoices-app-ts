import React from 'react';

import style from "./AddressBlock.module.scss";
import { Input } from "../Input";

const AddressBlock = () => {
    return (
        <div className={style.AddressBlock}>
            <div className={style.Item}>
                <Input inputId={'cityFrom'} label={'City'} />
            </div>
            <div className={style.Item}>
                <Input inputId={'postCodeFrom'} label={'Post Code'} />
            </div>
            <div className={style.Item}>
                <Input inputId={'countryFrom'} label={'Country'} />
            </div>
        </div>
    );
};

export { AddressBlock };