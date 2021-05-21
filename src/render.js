import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, addTextAreaText} from "./redux/state";

export let renderApp = (state) => {
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