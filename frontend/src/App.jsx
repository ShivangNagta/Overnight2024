import Header from './components/header';
import Sidebar from './components/sidebar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SingleFileProject from './components/SingleFileProject';
import MultiFileProject from './components/MultiFileProject';

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProjectDashboard />} />
          <Route path="/single-file" element={<SingleFileProject />} />
          <Route path="/multi-file" element={<MultiFileProject />} />
        </Routes>
      </div>
    </Router>
  );
}

function ProjectDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      
      {/* Card for creating a new project */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-80 text-center">
        <h2 className="text-lg font-semibold mb-4">Create a New Project</h2>
        <button
          onClick={() => navigate('/single-file')}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-2"
        >
          Single File Project
        </button>
        <button
          onClick={() => navigate('/multi-file')}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Multi File Project
        </button>
      </div>

      {/* Display existing projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {/* Sample existing projects for demonstration */}
        {existingProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 shadow-md rounded-lg p-4 text-center"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">Details about the project...</p>
            {/* Add buttons or links to edit/delete the project if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

const existingProjects = [
  { id: 1, name: 'Project One' },
  { id: 2, name: 'Project Two' },
  { id: 3, name: 'Project Three' },
];

export default App;
