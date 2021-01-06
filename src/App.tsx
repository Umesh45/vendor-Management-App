import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Vendor } from './Components/Vendor';
import { Home } from './Components/Home';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path='/' component={Home} />
                    <Route path='/vendor' component={Vendor} />
                </Router>
                <header>

                </header>
            </div>

        );
    }
}

export default App;
