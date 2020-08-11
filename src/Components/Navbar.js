import React from 'react';

const Navbar = React.memo(({ query, setQuery, searchInNav, search }) => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      {
        searchInNav && 
        <div className="form-inline mx-2 w-50">
          <input className="form-control form-control-lg col-md-8 mr-sm-2" type="search" placeholder="Search recipe or item" onChange={e => setQuery(e.target.value)} value={query} />
          <button className="btn btn-lg btn-outline-success" onClick={search}>Search</button>
        </div>
      }
      <h3 className="navbar-brand">Navbar</h3>
    </nav>
  );
})

export default Navbar;