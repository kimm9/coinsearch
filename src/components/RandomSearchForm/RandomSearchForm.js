import React from "react";
import "./RandomSearchForm.css"

const RandomSearchForm = props => (
  <div>
  <center>
  <form className="search">
    <div className="form-group">
      <button
        type="submit"
        onClick={props.loadNextCoinSubmit}
        className="btn btn-success btn-lg"
        id="searchBtn"
      >
        Discover
      </button>
    </div>
  </form>
  </center>
  </div>
);

export default RandomSearchForm;