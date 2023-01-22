import { FC } from "react";
import { Dashboard, InvoiceComponent, InvoicesSetting, NotFoundPage } from "./pages";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Dashboard />}>
                <Route path={'/'} element={<InvoiceComponent />} />
                <Route path={'/invoices-setting'} element={<InvoicesSetting />} />
            </Route>
            <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
    )
}

export { App };