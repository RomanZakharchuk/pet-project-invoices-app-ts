import { BillFrom } from "./BillFrom/BillFrom";
import { BillTo } from "./BillTo/BillTo";

const Form = () => {
    return (
        <div className={'p-[56px]'}>
            <h2 className={'h2-big text-vulcan mb-[48px]'}>New Invoice</h2>
            <form>
                <div className={'mb-[48px]'}>
                    <BillFrom />
                </div>

                <div className={'mb-[48px]'}>
                    <BillTo />
                </div>


                <div>
                    <span>Item List</span>
                </div>
            </form>
        </div>
    );
};

export { Form };