import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getCoinList: () => {
    return axios.get("https://min-api.cryptocompare.com/data/all/coinlist")
  },
  getCoinData: (coin) => {
    return axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + coin + "&tsyms=USD");
  },
};