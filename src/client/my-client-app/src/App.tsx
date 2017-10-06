import * as React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import MainContent from './components/MainContent';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="content">
          <aside className="navigationBar">
            <NavigationBar />
          </aside>
          <section className="mainContent">
            <MainContent />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
