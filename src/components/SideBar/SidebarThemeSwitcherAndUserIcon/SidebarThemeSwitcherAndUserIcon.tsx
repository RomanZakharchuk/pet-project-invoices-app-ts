import { ThemeDarkSvg } from "../../../svg-components";

const SidebarThemeSwitcherAndUserIcon = () => {
    return (
        <div>
            <div className={'w-full h-[103px] flex justify-center items-center'}>
                <ThemeDarkSvg />
            </div>
            <div className={'w-full h-[1px] bg-fiord'}></div>
            <div className={'w-full h-[103px] flex justify-center items-center'}>
                <div className={'w-[40px] h-[40px] rounded-[100%] bg-selago overflow-hidden'}></div>
            </div>
        </div>
    );
};

export { SidebarThemeSwitcherAndUserIcon };