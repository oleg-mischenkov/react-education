import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route render={ ()=> <Profile date={ props.date[2].userPosts} /> } path='/profile' />
                    <Route render={ ()=> <Dialogs date={ [props.date[0].usersDate, props.date[1].userMessage ] } /> } path='/dialogs' />
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
