import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state ={
    coinsym:"",
    allcoinDataArr:[],
    coinlist:"",
    match: false,
    matchCount: 0
  }

  componentDidMount() {
    this.loadNextCoin()

  }

  handleBtnClick = event => {
    console.log(event)
  }

  loadNextCoin = () => {
   API.getCoinList()
    .then(res => {
      const coinSymArr =[];
      const coinList = res.data.Data;
      for (var key in coinList) {
        coinSymArr.push(coinList[key]["Symbol"])
      }
      const ranSym = coinSymArr[Math.floor(Math.random() * coinSymArr.length)]

      // API.getCoinData(ranSym)
      //   .then(res => {


        // if (res.data.Response !== "Error" && res.data.DISPLAY[ranSym]) {
        //   console.log(res.data.DISPLAY)
        // } else {
        //   console.log(coinSymArr.indexOf(ranSym))
        //   coinSymArr.splice(coinSymArr.indexOf(ranSym), 1)
        //   const ranSym1 = coinSymArr[Math.floor(Math.random() * coinSymArr.length)]
        //   API.getCoinData(ranSym1)
        //     .then(res => {
        //       if(res.data.Response !== "Error" && res.data.DISPLAY[ranSym]) {
        //         console.log(res.data.DISPLAY)
        //       } else {
        //         const ranSym2 = coinSymArr[Math.floor(Math.random() * coinSymArr.length)]
        //         console.log(coinSymArr.indexOf(ranSym2))
        //         API.getCoinData(ranSym2)
        //           .then(res => {
        //             console.log(res.data)
        //           })
        //       }
              
        //     })

        // }


        // })

    })
  }

  render() {
    return (
      <div>
        <h1>Discover Cryptocurrency</h1>
        <h3></h3>

      </div>
    )
  }



}

export default Discover;