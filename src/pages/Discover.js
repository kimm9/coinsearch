import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import RandomSearchForm from "../components/RandomSearchForm"
import RandomSearchResult from "../components/RandomSearchResult"

class Discover extends Component {
  state ={
    coinsym:[],
    coinResults: [],
    error: ""
  }

  componentDidMount() {
    API.getCoinList()
      .then(res=> {
        for (var key in res.data.Data) {
          if(res.data.Data[key]["Symbol"] === "BTC") {
            console.log(res.data.Data[key])
            var sym =[]
            sym.push(res.data.Data[key])
            this.setState({coinsym: sym})
          }
        }
      })
    API.getCoinData("BTC")
      .then(res => {
        var symData = [];
        symData.push(res.data.DISPLAY.BTC.USD)
        this.setState({coinResults: symData})
      })
  }

  handleBtnClick = event => {
    console.log(event)
  }

  loadNextCoinSubmit = event => {
    event.preventDefault();
    API.getCoinList()
      .then(res => {
        var coinSymArr =[];
        var newRanSym = [];
        var ranSymData = [];
        var coinList = res.data.Data;
        for (var key in coinList) {
          coinSymArr.push(coinList[key])
        }
        var ranSym = coinSymArr[Math.floor(Math.random() * coinSymArr.length)]
        API.getCoinData(ranSym["Symbol"])
          .then(res => {
            if(res.data.Response !== "Error" && res.data.DISPLAY[ranSym["Symbol"]]) {
              console.log(ranSym["Id"])
              console.log("ransym is chosen")
              //this.setState({ coinsym: ranSym})
              newRanSym.push(ranSym)
              ranSymData.push(res.data.DISPLAY[ranSym["Symbol"]].USD)
                this.setState({coinsym: newRanSym, coinResults: ranSymData, error: res.data.Message})
            } else {
              console.log(coinSymArr.indexOf(ranSym["Symbol"]))
              coinSymArr.splice(coinSymArr.indexOf(ranSym["Symbol"]), 1)
              var ranSym1 = coinSymArr[Math.floor(Math.random() * coinSymArr.length)]
              console.log(ranSym1["Symbol"])
              API.getCoinData(ranSym1["Symbol"])
                .then(res => {
                  if(res.data.Response === "Error") {
                    throw new Error(res.data.Message)
                  } else {
                  console.log(ranSym1["Symbol"] + " is chosen")
                  console.log(res.data)
                  newRanSym.push(ranSym1)
                  ranSymData.push(res.data.DISPLAY[ranSym1["Symbol"]].USD)
                  }
                  this.setState({ coinsym: newRanSym, coinResults: ranSymData, error: res.data.Message})
                  console.log(this.state.coinResults)
                  console.log(this.state.coinsym)
                  console.log(this.state.error)
                })
                .catch(err => this.setState({ error: err.message}))
            }
          })
          .catch(err => 
            this.setState({ error: err.message })
            )
          //this.setState({coinsym: newRanSym, coinResults: ranSymData})
      })
  }

  render() {
    return (
      <div id="discover">
        <div id="hbtn">
        <h1><center>Discover Cryptocurrency</center></h1>
        <RandomSearchForm
          loadNextCoinSubmit={this.loadNextCoinSubmit}
        />
        </div>
        <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
            Sorry there was an error on the API call, please click 'Discover' again!
        </Alert>
        <RandomSearchResult
        coinsym={this.state.coinsym}
        coinResults={this.state.coinResults}
        rancoinResults={this.state.rancoinResults}
        />
      </div>
    )
  }



}

export default Discover;