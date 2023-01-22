import { Outlet } from "react-router-dom";

const Content = () => {
    return (
        <div className={'w-[720px] mx-auto mt-[72px]'}>
            <Outlet />
        </div>
    );
};

export { Content };