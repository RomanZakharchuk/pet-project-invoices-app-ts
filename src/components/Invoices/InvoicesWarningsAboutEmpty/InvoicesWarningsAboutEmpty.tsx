import ThereIsNothingHerePng from '../../../assets/images/There-is-nothing-here.png';

const InvoicesWarningsAboutEmpty = () => {
    return (
        <div className={'max-w-[250px] flex flex-col items-center mt-[calc(141px-65px)]'}>
            <img src={ThereIsNothingHerePng} alt="ThereIsNothingHerePng" />
            <span className={'h2 text-vulcan mt-[64px] mb-[24px]'}>There is nothing here</span>
            <span className={'span text-ship-cove'}>  Create an invoice by clicking the</span>
            <span className={'span text-ship-cove'}><b>New Invoice</b> button and get started</span>
        </div>
    );
};

export { InvoicesWarningsAboutEmpty };