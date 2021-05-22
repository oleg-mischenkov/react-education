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
                    <Route render={ ()=> <Profile state={props.store} /> } path='/profile' />
                    <Route render={ ()=> <Dialogs users={props.users} messages={props.messages} /> } path='/dialogs' />
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
