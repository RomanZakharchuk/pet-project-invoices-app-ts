import { FC } from "react";

interface IProps {
    label: string;
    inputId: string;
}

const Input: FC<IProps> = (props) => {
    const { inputId, label } = props;

    return (
        <>
            <label className={'span text-ship-cove mb-[10px] cursor-pointer'}
                   htmlFor={inputId}>{label}</label>
            <input
                className={'w-full border-[1px] border-solid border-selago rounded-[4px] py-[16px] px-[20px] h4 text-vulcan outline-0'}
                id={inputId}
                type="text"
            />
        </>
    );
};

export { Input };