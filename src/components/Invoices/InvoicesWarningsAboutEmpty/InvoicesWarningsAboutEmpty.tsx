import { FC } from "react";

import style from './InvoicesWarningsAboutEmpty.module.scss';
import ThereIsNothingHerePng from '../../../assets/images/There-is-nothing-here.png';

const InvoicesWarningsAboutEmpty: FC = () => {
    return (
        <div className={style.InvoicesWarningsAboutEmpty}>
            <img src={ThereIsNothingHerePng} alt="ThereIsNothingHerePng" />
            <span>There is nothing here</span>
            <span>  Create an invoice by clicking the</span>
            <span><b>New Invoice</b> button and get started</span>
        </div>
    );
};

export { InvoicesWarningsAboutEmpty };