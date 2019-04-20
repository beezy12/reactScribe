import React, { Component } from 'react';


class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("http://localhost:4001/api/getData")
      .then(res => res.json())
      .then(res => this.setState({ data: res.songs }));
  }

  render() {
    //console.log(Array.isArray(this.state.data))
    console.log(this.state)
    const data = this.state.data
    console.log(data)

    return (
      <div className="App">
        <div>
          {data.map(thing => <p>{thing.radiohead}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
