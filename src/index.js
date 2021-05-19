import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let commonDate = [
    {usersDate: [
            {id: 1, name: 'Jhon'},
            {id: 2, name: 'Shara'},
            {id: 3, name: 'Bob'},
            {id: 4, name: 'Dug'},
            {id: 5, name: 'Boris'},
            {id: 6, name: 'Cristina'}
        ]},
    {userMessage: [
            {id: 1, msg: 'Hello'},
            {id: 2, msg: 'Hi, my name is Boris'},
            {id: 3, msg: 'Yo Yo Yo!'},
            {id: 4, msg: 'Yo Yo Yo!'},
            {id: 5, msg: 'Yo Yo Yo!'}
        ]},
    {userPosts: [
            {id: 1, msg: 'Hi, how are you?', likes: 2},
            {id: 2, msg: 'It is my first post!', likes: 12},
            {id: 3, msg: 'I am happy', likes: 9},
        ]}
];

ReactDOM.render(
    <React.StrictMode>
        <App date={commonDate} />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
