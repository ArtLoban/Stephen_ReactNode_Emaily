import React, { Component, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;



class App extends Component {
  componentDidMount() {
    console.log('Im In!');
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
        </Routes>
      </div>
    );
  }
}

export default App;
