import React from 'react';
import { ArrowDownSvg, PlusSvg } from "../../../svg-components";

const InvoiceAddAndFilter = () => {
    return (
        <div className={'flex items-center'}>
            <div className={'flex flex-row items-center mr-[40px] cursor-pointer'}>
                <span className={'mr-[16px]'}>Filter by status</span>
                <ArrowDownSvg />
            </div>

            <div className={'btn pl-[56px] bg-cornflower-blue text-white relative cursor-pointer'}>New Invoice
                <PlusSvg className={'absolute top-[9px] left-[8px]'} />
            </div>
        </div>
    );
};

export { InvoiceAddAndFilter };