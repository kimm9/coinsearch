import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import RandomSearchForm from "../components/RandomSearchForm"
import RandomSearchResults from "../components/RandomSearchResults"

class Discover extends Component {
  state ={
    coinsym:"",
    coinResults: [],
    error: ""
  }

  componentDidMount() {

  }

  handleBtnClick = event => {
    console.log(event)
  }

  loadNextCoinSubmit = event => {
    API.getCoinList()
      .then(res => {
        const coinSymArr =[];
        const coinList = res.data.Data;
        for (var key in coinList) {
          coinSymArr.push(coinList[key])
        }
        const ranSym = coinSymArr[Math.floor(Math.random() * coinSymArr.length)]
        API.getCoinData(ranSym["Symbol"])
          .then(res => {
            if(res.data.Response !== "Error" && res.data.DISPLAY[ranSym["Symbol"]]) {
              console.log(ranSym)
              console.log("ransym is chosen")
              this.setState({ coinsym: ranSym})
              console.log(this.state.coinsym)
            } else {
              console.log(coinSymArr.indexOf(ranSym["Symbol"]))
              coinSymArr.splice(coinSymArr.indexOf(ranSym["Symbol"]), 1)
              const ranSym1 = coinSymArr[Math.floor(Math.random() * coinSymArr.length)]
              console.log(ranSym1["Symbol"])
              API.getCoinData(ranSym1["Symbol"])
                .then(res => {
                  if(res.data.Response === "Error") {
                    throw new Error(res.data.Message)
                  } else {
                  this.setState({ coinsym: ranSym1, coinResults: res.data.DISPLAY[ranSym1["Symbol"]].USD})
                  console.log(ranSym1["Symbol"] + " is chosen")
                  console.log(res.data)
                  }
                })
                .catch(err => console.log("error"))
            }
          })
          .catch(err => 
            console.log("error")
            )

      })
  }

  render() {
    return (
      <div>
        <h1>Discover Cryptocurrency</h1>
        <h3></h3>
        <RandomSearchResults
        coinsym={this.state.coinsym}
        coinresults={this.state.coinResults}
        />
        <RandomSearchForm
          loadNextCoinSubmit={this.loadNextCoinSubmit}
        />

      </div>
    )
  }



}

export default Discover;