import React from "react";
import Image from "./Images/taxi-car.png";
import DriverSignUpHome from "../Components/DriverSignUpHome";
import "./styles.css"; // Import the CSS file

const SvgIconExampleSimple = () => {
    const useModalProp = localStorage.getItem('openModal');
    console.log(useModalProp)
  return (
  <div>
    <div className="div-style">
      <div className="text-div-style">
        <div className="inner-div-style">
          <div>
          {useModalProp === 'signUp' && (
            <DriverSignUpHome />
          )}
          </div>
        </div>
      </div>
    </div>
    <div className="background-image" style={{ backgroundImage: `url(${Image})` }}></div>
  </div>
  )
};

export default SvgIconExampleSimple;
