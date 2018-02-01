import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const arr = ['小队长', '脏兮兮', '凶巴巴'];
      const showName = (name) => (<p>你好!我是{name}!</p>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <p>
              木楠楠自学历程
          </p>
          <div>
              <h2>数组运用</h2>
              {
                  arr.map((item) => showName(item))
              }
          </div>
          <div>
              <h2>JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员</h2>

          </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
