import { FC } from 'react';

import style from './Calendar.module.scss';
import { CalendarSvg } from "../../icons";

const Calendar: FC = () => {
    return (
        <div className={style.Calendar}>
            <label className={style.Label}>Invoice Data</label>

            <div className={style.CalendarBlock}>
                <span>20 Aug 2021</span>
                <CalendarSvg />
            </div>
        </div>
    );
};

export { Calendar };