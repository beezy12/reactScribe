import React, { Component } from 'react'
import axios from 'axios'
import Entries from './components/Entries'


class App extends Component {
  state = {
    entries: [],
    message: ''
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

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  addToDb = (e) => {
    e.preventDefault()
    console.log('message to be sent: ', this.state.message)

    axios.post("http://localhost:4001/api/storeEntries", {
      entry: this.state.message
    })
    .then(function (response) {
      console.log('response after sending message to db: ', response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }




  render() {
    const entries = this.state.entries
    //console.log(entries)

    return (
      <div>
        <Entries entries={entries} />
        <form onSubmit={(e) => this.addToDb(e)}>
          <label>
            Enter text:
            <input type="text" name="body" onChange={this.handleChange} />
          </label>
          <button type="submit" value="submit">send it</button>
        </form>
      </div>
    );
  }
}

export default App;
