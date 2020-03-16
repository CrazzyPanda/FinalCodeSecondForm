import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



class App extends React.Component{

    



    render(){
        return(
            <>
                <BrowserRouter>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </>
        );
    }
}
//NOTE: exact will make sure slash shows home but doesn't come up for /about and /contact aswell



// function App() {
//     return (
//         <div className="App">
//             <p>Hello</p>
//         </div>
//     );
// }

export default App;
