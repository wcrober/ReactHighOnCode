import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header';
import Article from './Components/Article';
import ArticleTwo from './Components/ArticleTwo';
import CurrentNews from './Components/CurrentNews';

class App extends Component {

  constructor() {
    super()
    this.topics = ["HighOn", "Coding", "Home", "Categories"]
  }

  render() {
    return (
      <div className="App">
      <Header headItems = {this.topics}/>
      <CurrentNews></CurrentNews>
      <Article></Article>
      <ArticleTwo></ArticleTwo>
        
      </div>
    );
  }
}

export default App;
