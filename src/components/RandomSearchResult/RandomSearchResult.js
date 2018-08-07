import React from "react";
import "./RandomSearchResult.css"

const RandomSearchResult = props => (

<div className="row">
<div className="card">
  {props.coinsym.map(result => (
  <div>
    <center>
    <h1>{result["CoinName"]}</h1>
    <img className="card-img-top" src={"https://www.cryptocompare.com" + result["ImageUrl"]} alt="Card image cap" />
    </center>
  </div>
  ))}
  <div className="card-body"> 
  {props.coinResults.map(result => (
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
{props.coinsym.map(result => (
  <div>
    <center><a href={"https://www.cryptocompare.com" + result["Url"]}  className="btn btn-primary">See Full Details</a></center>
  </div>
  
  ))
}
</div>
</div>
</div>

);

export default RandomSearchResult;