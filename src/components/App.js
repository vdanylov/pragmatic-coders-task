import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../styles/App.sass';
import store from '../redux/store/store'
import FilmsTinderContainer from './FilmsTinderContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FilmsTinderContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
