import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
const App = () => (
    <BrowserRouter>
        <Header />
        <div className="main">
            <div className="main-wrap">
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default App;
