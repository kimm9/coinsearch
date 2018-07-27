import React from "react";
import "./RandomSearchForm.css"

const RandomSearchForm = props => (
  <form className="search">

      <button
        type="submit"
        onClick={props.loadNextCoinSubmit}
        className="btn btn-success"
      >
        Discover
      </button>

  </form>
);

export default RandomSearchForm;