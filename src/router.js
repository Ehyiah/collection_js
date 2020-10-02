import { BrowserRouter, Route, Switch } from "react-router-dom/modules/BrowserRouter";
import Collections from "./Pages/Collection2";
import React from "react";
import App from "./App";

const Router = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/collections">
                        <Collections />
                    </Route>
                </Switch>
            </App>
        </BrowserRouter>
    )
}

export default Router
