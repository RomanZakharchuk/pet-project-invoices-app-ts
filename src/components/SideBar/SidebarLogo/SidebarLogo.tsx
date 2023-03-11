import { FC } from 'react';

import style from './SidebarLogo.module.scss';
import { PacManSvg } from "../../icons";

const SidebarLogo: FC = () => {
    return (
        <div className={style.SidebarLogo}>
            <PacManSvg />
            <div />
        </div>
    );
};

export { SidebarLogo };