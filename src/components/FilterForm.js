import React from "react";

function FilterForm(props) {
  return (
    <form>
      
      
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Apply
        </button>
    </form>
  );
}

export default FilterForm;