import React from "react";

function FilterForm(props) {
  return (
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Occupation</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Any</option>
          <option>Front End Developer</option>
          <option>Data Scientist</option>
          <option>Computer Systems Engineer</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Location</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Any</option>
          <option>Bikini Bottom</option>
          <option>California</option>
          <option>Hawaii</option>
        </select>
      </div>
    </form>
  );
}

export default FilterForm;