import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Initial from './components/Initial';
import Beksinski from './components/Beksinski';
import Magritte from './components/Magritte';
import Kahlo from './components/Kahlo';
import Chihuly from './components/Chihuly'; 
import Search from './components/Search';
import NotFound from './components/NotFound';

class App extends Component {

  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route render={ props => <Header handleSubmit={this.handleSubmit} history={props.history} /> } />
          <Switch>
            <Route exact path="/" component={Initial} />
            <Route path="/beksinski" render={() => <Beksinski searchTerm="beksinski" />} />
            <Route path="/magritte" render={() => <Magritte searchTerm="magritte" />} />
            <Route path="/kahlo" render={() => <Kahlo searchTerm="kahlo" />} />
            <Route path="/chihuly" render={() => <Chihuly searchTerm="chihuly" />} />
            <Route path="/search/:searchInput" render={(props) => <Search searchTerm={props.match.params.searchInput} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
