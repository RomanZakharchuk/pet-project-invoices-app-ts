import { Outlet } from "react-router-dom";

const Content = () => {
    return (
        <div className={'w-[720px] mx-auto h-screen'}>
            <Outlet />
        </div>
    );
};

export { Content };