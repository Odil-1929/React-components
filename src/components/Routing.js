import React, {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LessonOttizUch from "./LessonReakt2";

class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>



                    <Switch>
                        <Route path='/' component={LessonOttizUch}/>
                    </Switch>


                </BrowserRouter>
            </div>
        );
    }
}

export default Routing;