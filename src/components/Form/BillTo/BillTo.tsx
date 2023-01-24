import { Input } from "../Input/Input";
import { BillTitle } from "../BillTitle/BillTitle";

const BillTo = () => {
    return (
        <>
            <BillTitle name={'Bill To'} />
            <div>
                <Input inputId={'name'} label={'Client’s Name'} />
            </div>
            <div>
                <Input inputId={'email'} label={'Client’s Email'} />
            </div>
            <div>
                <Input inputId={'addressTo'} label={'Street Address'} />
            </div>

            <div>
                <div>
                    <Input inputId={'cityTo'} label={'City'} />
                </div>
                <div>
                    <Input inputId={'postCodeTo'} label={'Post Code'} />
                </div>
                <div>
                    <Input inputId={'countryTo'} label={'Country'} />
                </div>
            </div>
        </>
    );
};

export { BillTo };