import React, { Component } from 'react';
import Posts from './components/Entries'


class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("http://localhost:4001/api/getEntries")
      .then(res => res.json())
      .then(res => this.setState({ 
        data: res.music 
      }));
  }

  render() {

    const data = this.state.data
    console.log(data)

    return (
      <div className="App">
        <div>
          {data.map(thing => <p>{thing.band} {thing.song}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
