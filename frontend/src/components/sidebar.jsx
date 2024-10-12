import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [geoJsonFile, setGeoJsonFile] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle GeoJSON File Upload
  const handleGeoJsonUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGeoJsonFile(file);
      alert(`File uploaded: ${file.name}`);
      // You can process the file or send it to the server here
    }
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 bg-gray-800 text-white p-3 rounded-md shadow-md z-30 hover:bg-gray-700 focus:outline-none"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar (Right-aligned) */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-20 shadow-lg`}
      >
        <div className="p-6 space-y-8">
          <h2 className="text-xl font-semibold">Options</h2>

          {/* Upload GeoJSON Button */}
          <div className="space-y-4">
            <button
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black py-2 px-4 rounded-md shadow-md"
              onClick={() => document.getElementById('geojson-upload').click()}
            >
              Upload GeoJSON
            </button>
            {/* Hidden File Input */}
            <input
              id="geojson-upload"
              type="file"
              accept=".geojson"
              onChange={handleGeoJsonUpload}
              className="hidden"
            />
          </div>

          {/* Create Footprints Button */}
          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black py-2 px-4 rounded-md shadow-md">
            Create Footprints
          </button>
        </div>
      </div>

      {/* Overlay to close the sidebar when clicking outside */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
