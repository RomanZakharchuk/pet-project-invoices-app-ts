import { FC } from "react";
import { Link } from "react-router-dom";

import style from './BtnsBlock.module.scss';

interface IProps {
    link: string;
    nameBtn: string;
    nameLink: string;
}

const BtnsBlock: FC<IProps> = ({ link, nameBtn, nameLink }) => {
    return (
        <div className={style.Container}>
            <button
                className={style.Btn}
                type={'submit'}>{nameBtn}
            </button>
            <Link
                to={link}
                className={style.Link}
                type={'button'}>{nameLink}
            </Link>
        </div>
    );
};

export { BtnsBlock };