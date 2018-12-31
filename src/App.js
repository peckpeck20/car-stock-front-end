import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Home from "./components/Home";
import Carlist from "./components/Carlist";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">My car shop</h1>
          </header> */}
          <BrowserRouter>
            <div>
              {/* <Link to="/">Root</Link>
              <Link to="/home">Home</Link>
              <Link to="/cars">Cars</Link> */}
              <Switch>
                <Route exact path="/" component={Carlist} />
                <Route path="/home" component={Home} />
                <Route path="/cars" component={Carlist} />
                <Route render={() => <h1>Page not found</h1>} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
