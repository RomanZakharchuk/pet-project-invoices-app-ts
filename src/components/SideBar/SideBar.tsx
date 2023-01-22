import { SidebarLogo } from "./SidebarLogo/SidebarLogo";
import { SidebarThemeSwitcherAndUserIcon } from "./SidebarThemeSwitcherAndUserIcon/SidebarThemeSwitcherAndUserIcon";

const SideBar = () => {
    return (
        <div className={'h-screen flex flex-col justify-between al bg-oxford-blue overflow-hidden rounded-r-[20px]'}>
            <SidebarLogo />
            <SidebarThemeSwitcherAndUserIcon />
        </div>
    );
};

export { SideBar };