import { Outlet } from "react-router-dom";

import style from './Content.module.scss';

const Content = () => {
    return (
        <div className={style.Content}>
            <Outlet />
        </div>
    );
};

export { Content };