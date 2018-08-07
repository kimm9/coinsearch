import React from "react";
import "./SearchForm.css"

const SearchForm = props => (


<div className="row justify-content-center">
<div className="col-12 col-md-10 col-lg-8">
  <form className="search">
    <div className="form-group">
    <div className="card-body row no-gutters align-items-center">
      <label htmlFor="coin">Search Coin:</label>
    <div className="col-auto">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="coin"
        list="coins"
        type="text"
        className="form-control"
        placeholder="Type in a coin to begin"
        id="coin"
      />
      <datalist id="coins">
        {props.coins.map(coin => <option value={coin} key={coin} />)}
      </datalist>
      </div>
      <div className="col-auto">
      <button
        type="submit"
        onClick={props.handleCoinSubmit}
        className="btn btn-success"
      >
        Search
      </button>
      </div> 
    </div> 
    </div> 
  </form>
</div>
</div>

)

export default SearchForm;