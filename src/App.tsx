import { FC, ReactElement, useEffect } from "react";
import {
    Login,
    Registration,
    Home, Dashboard,
    InvoiceComponent,
    InvoicesSetting,
    NotFoundPage
} from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";

const GuarderElement = ({
                            component,
                            isComponentGuarded
                        }: { component: ReactElement, isComponentGuarded?: boolean }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token && isComponentGuarded) navigate('/dashboard');
    }, [token]);

    return component;
};

const App: FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={'/dashboard'} element={<Dashboard />}>
                <Route index element={<Login />} />
                <Route path={'registration'} element={<Registration />} />
                <Route path={'invoice'}
                       element={<GuarderElement component={<InvoiceComponent />} isComponentGuarded={true} />} />
                <Route path={'invoices-setting'} element={<InvoicesSetting />} />
            </Route>
            <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
    )
}

export { App };