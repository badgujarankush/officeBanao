import React from "react";
import "../Styles/Progress.css";
import CheckPoint from "./CheckPoint";
import { progressData } from '../Utils/data';
const ProgressBar = () => {
  return (
    <div className="progressTab">

    {progressData.map((item,index)=>
            index===progressData.length-1?
            <><div className="bundle">
            <CheckPoint complete={item.complete} />
            <h1>{item.title}</h1>
            </div></>
            :
            <><div className="bundle">
            <CheckPoint complete={item.complete} />
            <h1>{item.title}</h1>
            <div className="bar"></div>
            </div></>
    )}
    </div>
  );
};

export default ProgressBar;
