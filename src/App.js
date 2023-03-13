import logo from "./Images/POD_Web.png";
import diegif from "./Images/diegif.gif";

import sc from "./Images/SC_WL.png";
import tb from "./Images/TB_WL.png";
import th from "./Images/PTH_WL.png";
import wc from "./Images/WC_WL.png";
import sb from "./Images/SB_WL.png";
import ml from "./Images/ML_WL.png";
import to from "./Images/T_WL.png";
import em from "./Images/EMPTY_WL.png";

import tw from "./Images/twitter.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="MainContainer">
        <div className="Title">
          <div className="Die">
            <img src={diegif} alt="" />
          </div>
          <div className="TitleImg">
            <img src={logo} alt="" />
          </div>
          <div className="Die">
            <img src={diegif} alt="" />
          </div>
        </div>
        <div className="SubTitle">
          <h1>Whilists we Have:</h1>
        </div>
        <div className="Table">
          <div className="FirstRow">
            <div className="TextCell Right">
              <h2>PROJECT</h2>
            </div>
            <div className="TextCell Left">
              <h2>N#</h2>
            </div>
          </div>
          {/* =======================lista======================= */}
          <div className="SecondRow">
            <div className="TextCell Right">
              <div className="TextElement">
                <img src={sc} alt="" />
                <p>SOLCASINO</p>
              </div>
              <div className="TextElement">
                <img src={tb} alt="" />
                <p>BASTARDS</p>
              </div>
              <div className="TextElement">
                <img src={th} alt="" />
                <p>THE HEIST</p>
              </div>
              <div className="TextElement">
                <img src={wc} alt="" />
                <p>WOLF CAPITAL</p>
              </div>
              <div className="TextElement">
                <img src={sb} alt="" />
                <p>SANDBAR</p>
              </div>
              <div className="TextElement">
                <img src={ml} alt="" />
                <p>MAD LADS</p>
              </div>
              <div className="TextElement">
                <img src={to} alt="" />
                <p>TOONIES</p>
              </div>
              <div className="TextElement">
                <img src={em} alt="" />
                <p>EMPTY</p>
              </div>
            </div>

            {/* =======================numeros======================= */}
            <div className="TextCell Left">
              <div className="TextElement">
                <p>5</p>
              </div>
              <div className="TextElement">
                <p>7</p>
              </div>
              <div className="TextElement">
                <p>3</p>
              </div>
              <div className="TextElement">
                <p>4</p>
              </div>
              <div className="TextElement">
                <p>4</p>
              </div>
              <div className="TextElement">
                <p>4</p>
              </div>
              <div className="TextElement">
                <p>2</p>
              </div>
              <div className="TextElement">
                <p>*</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Social">
          <img src={tw} alt="" />
          <p>@print_or_die</p>
        </div>
      </div>
    </div>
  );
}

export default App;
