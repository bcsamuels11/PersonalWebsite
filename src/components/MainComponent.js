import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavigationBar } from "./NavigationBar.js";
import * as routes from "../routes.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Research from '../pages/Research.js';
import Work from "../pages/Work.js";
import { Contact } from '../pages/Contact.js';
import { Footer } from "./Footer.js";

class Main extends Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <Switch>
                    <Route exact path={routes.HOME} component={Home} />
                    <Route path={routes.ABOUT} component={About} />
                    <Route path={routes.WORK} component={Work} />
                    <Route path={routes.RESEARCH} component={Research} />
                    <Route path={routes.CONTACT} component={Contact} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;