import React, { Component } from "react";
import API from "../utils/API"
import Container from "../components/Container"
import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"
import Alert from "../components/Alert"


class Search extends Component {
  state = {
    search: "",
    coinsym: "",
    coinDataResults: [],
    coinresults: [],
    coins: [],
    error: ""
  };

  componentDidMount() {

    API.getCoinList()
      .then(res => {
        var coinNameArr=[];
        var coinList = res.data['Data']
        console.log(coinNameArr)
        for (var key in coinList) {
          coinNameArr.push(coinList[key]["CoinName"])
        }
        this.setState({coins: coinNameArr.sort()})
      })
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search)
  };


  handleCoinSubmit = event => {
    event.preventDefault();
    API.getCoinList()
      .then(res => {
        var coinobj=[];
        var coinInfo = [];
        var sym;
        var coinList = res.data['Data']
        if (coinList === "error") {
          throw new Error(res.data.message);
        }
        for (var key in coinList) {
          if (this.state.search.toUpperCase() == coinList[key]["CoinName"].toUpperCase() ) {
          coinobj.push(coinList[key])
          sym = coinList[key]["Symbol"]
          console.log(sym)
          }
        }
        this.setState({ coinresults: coinobj, coinsym: sym})
        console.log("https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=" + this.state.coinsym + "&tsym=USD")
        API.getCoinData(this.state.coinsym)
          .then(res => {
            var coinData = [];
            if (res.data.Response === "Error") {
              throw new Error(res.data.Message);
            }
            coinData.push(res.data.DISPLAY[this.state.coinsym].USD)
            console.log(coinData[0])
            this.setState({ coinDataResults: coinData, error: res.data.Message})
            console.log(this.state.coinDataResults)
            console.log(this.state.error)
          })
          .catch(err => this.setState({ error: err.message }));
      })
  }

  render() {
    return (
        <Container style={{ minHeight: "80%"}}>
          <h1 className="text-center">Search</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleCoinSubmit={this.handleCoinSubmit}
            handleInputChange={this.handleInputChange}
            coins={this.state.coins}
          />
          <SearchResults 
          results={this.state.results}
          coinresults={this.state.coinresults}
          coinDataResults={this.state.coinDataResults}
          />
        </Container>
      
    )
  }

}
export default Search;