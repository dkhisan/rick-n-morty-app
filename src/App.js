import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header'
import Router from './components/Router'

class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div style={{ backgroundColor: '#eee' }}>
                <Header />
                <Router />
            </div>
        </BrowserRouter>
        )
    }
 }

 export default App;