import React, { Component } from 'react';
import Entries from './components/Entries'


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
    // console.log(entries)

    return (
      <div>
        <Entries entries={entries} />
      </div>
    );
  }
}

export default App;
