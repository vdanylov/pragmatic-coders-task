import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from '../styles/logo.svg';
import '../styles/App.sass';
import store from '../redux/store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          Hello!
        </div>
      </Provider>
    );
  }
}

export default App;
