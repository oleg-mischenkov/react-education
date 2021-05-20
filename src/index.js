import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'

ReactDOM.render(
    <React.StrictMode>
        <App
            users={state.dialogsPage.usersDate}
            messages={state.dialogsPage.userMessage}
            posts={state.profilePage.userPosts} />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
