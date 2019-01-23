import React, { Component } from 'react';
import './App.css';
import {db } from './firebase';

class App extends Component {

  state = {
    title: "Welcome to React",
    suggestions: []
  }
  componentDidMount() {
    db
    .doc('courses/online')
    .get()
    .then(doc => this.setState({title: doc.data().name}))
    
    db
      .collection('suggestions')
      
      .onSnapshot(coll => {
        const suggestions = coll.docs.map(doc => 
          doc.data().name)
          this.setState({ suggestions})
      })
      
  }
  handleSubmit = event => {
    event.preventDefault();
    db.collection('suggestions').add({ name: this.titleName.value})
    this.titleName.value = null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
        <form onSubmit={event=> this.handleSubmit(event)}>
            <input type="text" ref={input => {this.titleName = input}}></input>
            <button type="submit">Submit</button>
          </form>
          <ul>
            {this.state.suggestions.map((topic, index) => 
              <li key={index}>{topic}
                
              </li>)}
          </ul>
          </header>

      </div>
    );
  }
}

export default App;
