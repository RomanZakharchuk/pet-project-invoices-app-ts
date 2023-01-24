import { FC } from "react";

interface IProps {
    name: string;
}

const BillTitle: FC<IProps> = ({ name }) => {
    return (
        <span className={'h4 text-cornflower-blue mb-[24px]'}>{name}</span>
    );
};

export { BillTitle };