import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chatlog from './components/Chatlog'

class App extends Component {
  render() {
    console.log(chatMessages);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">vladmir & estragen's tragic love affair </h1>
        </header>

        <main className="App-main">
          <Chatlog messages={chatMessages}/>
        </main>
      </div>
    );
  }
}

export default App;
