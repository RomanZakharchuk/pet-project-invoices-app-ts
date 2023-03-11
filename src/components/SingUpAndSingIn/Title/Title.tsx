import { FC } from "react";

import style from './Title.module.scss';

interface IProps {
    title: string;
}

const Title: FC<IProps> = ({ title }) => {
    return (
        <h2 className={style.Title}>{title}</h2>
    );
};

export { Title };