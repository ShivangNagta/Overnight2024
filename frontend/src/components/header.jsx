import { useState } from 'react';

function Header() {
  const [selectedDay, setSelectedDay] = useState('');
  const [ghiValue, setGhiValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Day: ${selectedDay}, GHI Value: ${ghiValue}`);
  };

  return (
    <header className="bg-gray-900 text-white p-6 shadow-md">
      <div className="container lg:mx-auto px-6 flex justify-between items-center ml-6 flex-wrap space-y-4 lg:space-y-0">
        <div className="flex space-x-8">
          <h1 className="text-2xl font-bold tracking-wide">Editor</h1>
          {/* Navigation Links */}
          <nav className="space-x-6 text-sm lg:text-base font-semibold mt-1">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#learn" className="hover:text-gray-300">Learn</a>
            <a href="#about" className="hover:text-gray-300">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
