import React from "react";

function FilterForm(props) {
  return (
    <form>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="cool" id="defaultCheck2" onChange={props.handleCheckBox} />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Default checkbox
        </label>
      </div>
    </form>
  );
}

export default FilterForm;