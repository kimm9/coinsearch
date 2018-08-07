import React from "react";
import coinStack from "../image/coin2.png"

const About = () => (
  <div>
    <div className="row" id="hero">
      <div id="caption">
        <p>FIND YOUR</p>
        <p>cryptocurrency</p>
      </div>
    </div>
    
      <div className="row" id="row2">
        <div className="col" id="row2Txt">
        <img src={coinStack} id="coinStack"></img>
          <h1>Get your cryptocurrency data here!</h1>
          <p>Through this Web Application, you can search your favorite cryptocurrency and see it's real-time market data.</p>
        </div>
      </div>
  </div>

  )

export default About;