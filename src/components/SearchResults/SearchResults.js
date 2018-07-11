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
    <div>{result["PRICE"]}</div>
    <div>{result["HIGHDAY"]}</div>
    <div>{result["LOWDAY"]}</div>
    <div>{result["CHANGEPCTDAY"]}</div>
    <div>{result["CHANGEDAY"]}</div>
    <div>{result["MKTCAP"]}</div>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Crytocurrency Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
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