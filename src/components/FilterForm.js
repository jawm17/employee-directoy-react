import React from "react";

function FilterForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Occupation</label>
        <select className="form-control" id="occupation" onChange={props.handleFilterChange}>
          <option>Any</option>
          <option>Front End Developer</option>
          <option>Data Scientist</option>
          <option>Computer Systems Engineer</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Location</label>
        <select className="form-control" id="location" onChange={props.handleFilterChange}>
          <option>Any</option>
          <option>Bikini Bottom</option>
          <option>California</option>
          <option>Hawaii</option>
        </select>
      </div>
      <button onClick={props.handleFilter} className="btn btn-primary">
        Apply
      </button>
    </form>
  );
}

export default FilterForm;