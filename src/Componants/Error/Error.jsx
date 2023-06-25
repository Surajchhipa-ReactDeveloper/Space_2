import React from "react";
import "./Error.css";
import { Images } from "../../Constant/imagePath";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="Error_Container">
        <img src={Images.Error_Page} alt="" />
        <NavLink to="/">
          <button className="GO_Back">GO BACK</button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
