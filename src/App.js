import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Homepage';
import About from './components/About';
import Search from './components/Search';

import { Provider } from 'react-redux'; 
// import store from './store'
import PageNotFound from './components/404';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  const navigation = useNavigate()
  return (
    <div className="App">
      <Header />
      <Routes>
      {/* <Provider store={store}> */}
        <Route exact path="/" element={<HomePage navigation={navigation} />} />
      {/* </Provider> */}
         <Route exact path="/about" element={<About />} />
        <Route exact path="/Search" element={<Search />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
