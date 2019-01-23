import React, { Component } from 'react';
import './App.css';
import {db } from './firebase';

class App extends Component {

  state = {
    title: "Welcome to React"
  }
  componentDidMount() {
    db
    .doc('courses/online')
    .get()
    .then(doc => this.setState({title: doc.data().name}))
  }
  handleSubmit = event => {
    event.preventDefault();
    db.doc('courses/online').set({ name: this.titleName.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>
        <form onSubmit={event=> this.handleSubmit(event)}>
            <input type="text" ref={input => {this.titleName = input}}></input>
            <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default App;
