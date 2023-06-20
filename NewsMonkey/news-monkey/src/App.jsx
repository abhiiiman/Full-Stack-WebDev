import './App.css';
import React, { Component } from "react";
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News pageSize={6} key="general" category="general" country="in" />} />
          <Route exact path="/business" element={<News pageSize={6} key="business" category="business" country="in" />} />
          <Route exact path="/entertainment" element={<News pageSize={6} key="entertainment" category="entertainment" country="in" />} />
          <Route exact path="/sports" element={<News pageSize={6} key="sports" category="sports" country="in" />} />
          <Route exact path="/health" element={<News pageSize={6} key="health" category="health" country="in" />} />
          <Route exact path="/science" element={<News pageSize={6} key="science" category="science" country="in" />} />
          <Route exact path="/technology" element={<News pageSize={6} key="technology" category="technology" country="in" />} />
        </Routes>
      </BrowserRouter>
    )
  }
}