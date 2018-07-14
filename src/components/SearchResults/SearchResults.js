import React from "react";
import "./SearchResults.css";



const SearchResults = props => (


<div>
<div className="card" >
{props.coinresults.map(result => (
  <div>
    <h1><center>Search Results</center></h1>
    <img className="card-img-top" src={"https://www.cryptocompare.com" + result["ImageUrl"]} alt="Card image cap" />
  </div>
  
  ))
}
<div className="card-body"> 
{props.coinDataResults.map(result => (
  <div>
  <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Price</th>
      <th scope="col">Market Cap</th>
      <th scope="col">Circulating Supply</th>
      <th scope="col">Volume (24H)</th>
      <th scope="col">Day's Range</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">{result["PRICE"]}</td>
      <td>{result["MKTCAP"]}</td>
      <td>{result["SUPPLY"]}</td>
      <td>{result["VOLUME24HOUR"]}</td>
      <td>{result["LOWDAY"]} - {result["HIGHDAY"]}</td>
    </tr>

  </tbody>
</table>
  </div>

  ))

}
{props.coinresults.map(result => (
  <div>
    <center><a href={"https://www.cryptocompare.com" + result["Url"]}  className="btn btn-primary">See Full Details</a></center>
  </div>
  
  ))
}
</div>
</div>
</div>

);

export default SearchResults;