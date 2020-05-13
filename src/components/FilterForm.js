import React from "react";

function FilterForm(props) {
  return (
    <form>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="frontEndDevelopers" id="defaultCheck1" onChange={props.handleCheckBox}/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Front End Developers
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="dataScientists" id="defaultCheck2" onChange={props.handleCheckBox} />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Data Scientists
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="computerSystemsEngineers" id="defaultCheck2" onChange={props.handleCheckBox} />
        <label className="form-check-label" htmlFor="defaultCheck1">
        Computer Systems Engineers
        </label>
      </div>
    </form>
  );
}

export default FilterForm;