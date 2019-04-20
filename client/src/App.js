import React, { Component } from 'react';
import Posts from './components/Entries'


class App extends Component {
  state = {
    entries: []
  }

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("http://localhost:4001/api/getEntries")
      .then(res => res.json())
      .then(res => this.setState({ 
        entries: res 
      }));
  }

  render() {

    const entries = this.state.entries
    console.log(entries)

    return (
      <div className="App">
        <div>
          {entries.map(entry => <p>{entry.testagain}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
