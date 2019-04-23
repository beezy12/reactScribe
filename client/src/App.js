import React, { Component } from 'react'
import axios from 'axios'
import Entries from './components/Entries'


class App extends Component {
  state = {
    entries: [{
      entryBody: '',
      entryTitle: ''
    }],
    isLoaded: false
  }

  componentDidMount() {
    this.getDataFromDb();
  }

  // ***** THIS NEEDS TO CHANGE ******* //
  componentDidUpdate() {
    console.log('component did in fact update')
    //this.getDataFromDb()
  }

  // *** maybe add async await here?
  // getDataFromDb = () => {
  //   fetch("http://localhost:4001/api/getEntries")
  //     .then(res => res.json())
  //     .then(res => this.setState({ 
  //       entries: res,
  //       isLoaded: true 
  //     }))
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  getDataFromDb = async () => {
    const res = await fetch("http://localhost:4001/api/getEntries")
    const data = await res.json()
    console.log('about to set state with this data: ', data)
    this.setState({
      entries: data,
      isLoaded: true
    })
    // .catch(err => {     //// this doesn't work anymore once I set the async await
    //   console.log(err)
    // })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addToDb = (event) => {
    event.preventDefault()

    axios.post("http://localhost:4001/api/storeEntries", {
      entry: {
        entryBody: this.state.entryBody,
        entryTitle: this.state.entryTitle
      }
    })
    .then(function (response) {
      console.log('response after sending entryBody to db: ', response)
      this.getDataFromDb()
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
        <form onSubmit={(event) => this.addToDb(event)}>
          <label>
            Enter title:
            <input type="text" name="entryTitle" onChange={this.handleChange} />
          </label>
          <label>
            Type entry body here:
            <input type="text" name="entryBody" onChange={this.handleChange} />
          </label>
          <button type="submit" value="submit">send it</button>
        </form>
      </div>
    );
  }
}

export default App;
