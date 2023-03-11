import { FC, useState } from "react";

import style from './SidebarThemeSwitcherAndUserIcon.module.scss';
import { ThemeDarkSvg } from "../../icons";
import { useAuth } from "../../../hooks/useAuth";

const SidebarThemeSwitcherAndUserIcon: FC = () => {
    const { logOut } = useAuth();

    return (
        <div>
            {localStorage.getItem('token') && (
                <div className={style.WrapperBtn}>
                    <button
                        onClick={() => logOut()}
                        className={style.BtnLogOut}>
                        Log out
                    </button>
                </div>
            )}

            <div className={style.SwitchThemeBlock}>
                <button className={style.Switch} type={'button'}>
                    <ThemeDarkSvg />
                </button>
            </div>
            <div className={style.Line}></div>
            <div className={style.AvatarBlock}>
                <div></div>
            </div>
        </div>
    );
};

export { SidebarThemeSwitcherAndUserIcon };