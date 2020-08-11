import React from 'react';

const Default = React.memo(({ searchInNav, query, setQuery, search }) => {
  return (
    <>
      {
        !searchInNav &&
        <div className="row justify-content-center my-md-5 my-sm-2">
          <input className="form-control form-control-lg form-control-borderless w-50" type="search" placeholder="Search recipe or item" onChange={e => setQuery(e.target.value)} value={query} />
          <button className="btn btn-lg btn-success" onClick={search}>Search</button>
        </div>
      }
      <div className="text-center mx-auto w-responsive w-75">
        <h1 className="h1-responsive">
          "One cannot think well, love well, sleep well, if not has not dined well."
            </h1>
        <h5 className="h5-responsive">Virginia Woolf</h5>
      </div>
    </>
  );
})

export default Default;