import React from "react";
import './style.css';
import fruitImg from "./fruit.jpg";

function MainBanner(){
    return(
    <div className="header">
        <div className="header-content">
            <div className="content-Main">
                <h1>Fresh Food For Your Door Step</h1>
                <p>Food for your wellbeing, browse for more!</p>
                <button>
                    View Categories <i className="fas fa-long-arrow-alt-right"/>
                </button>
               
            </div>
        </div>
        <img src={fruitImg} alt="mainbannerImg" className="header-Img" />
    </div>
        
    );
}

export default MainBanner;
