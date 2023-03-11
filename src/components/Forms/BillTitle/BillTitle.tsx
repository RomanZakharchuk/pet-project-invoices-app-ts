import { FC } from "react";

import style from './BillTitle.module.scss';

interface IProps {
    name: string;
}

const BillTitle: FC<IProps> = ({ name }) => {
    return (
        <span className={style.BillTitle}>{name}</span>
    );
};

export { BillTitle };