import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import College from './components/college/college';
import Student from './components/student/student';
import StudentId from './components/student/studentid';


function App() {
  const StudId = {
    studentid: "100966275"
  }

  return (
    <Fragment>
      <div className="container">
        <div className="logo-wrap">
          <img src={logo} alt="React logo" className="logo-big" />
        </div>
        <h1>Welcome To Full Stack Development - I</h1>
        <h2>React JS Programming Week09 Lab Exercise </h2>
        <StudentId stud={StudId} />
        <Student />
        <College />
      </div>
    </Fragment>

  );
}

export default App;
