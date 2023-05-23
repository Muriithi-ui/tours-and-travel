import React from 'react'

const Hero = () => {
  return (
    <div className='container mt-5'>
      <div className="search-bar">
      <nav className="navbar navbar-expand navbar-light bg-light">
        {/* Navbar content */}
      </nav>
      <div className="search-container">
        <select className="form-select">
          <option>Select Place</option>
          {/* Add options */}
        </select>
        <select className="form-select">
          <option>How Many Days</option>
          {/* Add options */}
        </select>
        <input type="date" className="form-control" />
        <button className="btn btn-primary">
          <i className="bi bi-search"></i> Go
        </button>

        <i class='bx bx-arrow-back bx-rotate-90' />
        <i class='bx bx-arrow-back bx-rotate-270' />
      </div>
    </div>
    </div>
    
  );
};

export default Hero;