import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let renderApp = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderApp();

store.subscribe(renderApp);

reportWebVitals();
