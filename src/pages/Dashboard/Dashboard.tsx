import { Content, SideBar } from "../../components";

const Dashboard = () => {
    return (
        <div className='flex bg-whisper'>
            <SideBar />
            <Content />
        </div>
    );
};

export { Dashboard };