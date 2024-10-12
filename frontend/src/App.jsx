// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectDashboard from './components/ProjectDashboard';
import SingleFileProject from './components/SingleFileProject';
import MultiFileProject from './components/MultiFileProject';

function App() {
  return (
    <Router>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ProjectDashboard />} />
            <Route path="/single-file" element={<SingleFileProject />} />
            <Route path="/multi-file" element={<MultiFileProject />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
