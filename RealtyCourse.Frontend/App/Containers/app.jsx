import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HouseIndex from './HouseIndex/houseIndex.jsx';
import HouseRead from './HouseRead/houseRead.jsx';



export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div style={{ textAlign: "center", marginTop: "35px" }}>
                    <h2 style={{ marginTop: "30px" }}>React Realty Course</h2>
                    <hr></hr>
                    <div>
                        <Link to={"/house/index"}>Browse houses list</Link>
                    </div>
                    <div>
                        <Link to={"/house/read/1"}>Single house info</Link>
                    </div>
                    <div>
                        <Link to={"/apartment/index"}>Browse all apartments</Link>
                    </div>
                    <div>
                        <Link to={"/apartment/read/1"}>View single apartment</Link>
                    </div>

                    <Switch>
                        <Route path="/house/index" component={HouseIndex} />
                        <Route path="/house/read/1" component={HouseRead} />
                        {/*<Route path="/apartment/index" component={ApartmentIndex} />*/}
                        {/*<Route path="/apartment/read/:id" component={ApartmentRead} />*/}
                    </Switch>

                </div>
            </Router>

        );
    }
}