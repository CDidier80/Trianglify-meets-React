import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
// import App from './App';
import TrianglifyTemplate from './components/React-Tri-Template/ReactTrianglifyTemplate';
import TrianglifyOne from './components/React-Tri-Template/ReactTrianglifyTemplate';
import TrianglifyTwo from './components/React-Tri-Template/ReactTrianglifyTemplate';
import TrianglifyThree from './components/React-Tri-Template/ReactTrianglifyTemplate';
import TrianglifyFour from './components/React-Tri-Template/ReactTrianglifyTemplate';
import TrianglifyFive from './components/React-Tri-Template/ReactTrianglifyTemplate';

ReactDOM.render(
  <React.StrictMode>
    {/* <TrianglifyTemplate /> */}
    <TrianglifyOne />
    {/* <TrianglifyTwo />
    <TrianglifyThree />
    <TrianglifyFour />
    <TrianglifyFive /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

