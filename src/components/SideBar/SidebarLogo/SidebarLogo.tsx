import React from 'react';
import { PacManSvg } from "../../../svg-components";

const SidebarLogo = () => {
    return (
        <div className={'h-[103px] w-[103px] flex justify-center items-center bg-cornflower-blue overflow-hidden rounded-br-[20px] relative'}>
            <PacManSvg />
            <div className={'absolute w-full h-[50px] bg-heliotrope rounded-tl-[20px] z-[1] bottom-0'}></div>
        </div>
    );
};

export { SidebarLogo };