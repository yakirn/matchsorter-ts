import * as React from 'react';
import './App.css';
import matchSorter from 'match-sorter';

const logo = require('./logo.svg');

interface AppState {
  cars: string[];
}
class App extends React.Component<{}, AppState> {

  state = {cars: [ 'Ford', 'BMW', 'Fiat' ]};
  render() {
    const res: string[] = matchSorter(this.state.cars, 'f');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ol>
        {
          res.map((s => <li key={s}>{s}</li>))}
        </ol>
      </div>
    );
  }
}

export default App;
