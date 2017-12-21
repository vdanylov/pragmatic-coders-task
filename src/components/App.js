import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../styles/App.sass';
import store from '../redux/store/store'
import FilmsTinderComponent from './FilmsTinderComponent'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FilmsTinderComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
