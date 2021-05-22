import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost, addTextAreaText, renderListener} from "./redux/state";

let renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                users={state.dialogsPage.usersDate}
                messages={state.dialogsPage.userMessage}
                posts={state.profilePage.userPosts}
                addPost={addPost}
                addTextAreaText={addTextAreaText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderApp();

renderListener(renderApp);

reportWebVitals();
