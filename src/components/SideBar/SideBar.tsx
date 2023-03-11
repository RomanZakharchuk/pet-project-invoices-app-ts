import { FC } from "react";

import style from './SideBar.module.scss';
import { SidebarLogo } from "./SidebarLogo";
import { SidebarThemeSwitcherAndUserIcon } from "./SidebarThemeSwitcherAndUserIcon";

const SideBar: FC = () => {
    return (
        <div className={style.SideBar}>
            <SidebarLogo />
            <SidebarThemeSwitcherAndUserIcon />
        </div>
    );
};

export { SideBar };