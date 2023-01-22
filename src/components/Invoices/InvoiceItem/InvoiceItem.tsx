import { ArrowRightSvg } from "../../../svg-components";

const InvoiceItem = () => {
    return (
        <div className={'flex justify-between items-center bg-white rounded-[8px] shadow-invoice-item px-[32px] py-[16px] cursor-pointer'}>
            <div>
                <span className={'h4 text-ship-cove'}>#</span>
                <span className={'h4 text-vulcan'}>RT3080</span>
            </div>
            <span className={'span text-ship-cove'}>Due  19 Aug 2021</span>
            <span className={'span text-ship-cove'}>Jensen Huang</span>
            <span className={'h3 text-vulcan'}>£ 1,800.90</span>
            <div className={'flex justify-center items-center bg-shamrock-opacity mix-blend-normal rounded-[6px] px-[30px] py-[13px]'}>
                <div className={'w-[8px] h-[8px] rounded-[50px] bg-shamrock mr-[8px]'}></div>
                <span className={'h4  text-shamrock'}>Paid</span>
            </div>
            <ArrowRightSvg />
        </div>
    );
};

export { InvoiceItem };