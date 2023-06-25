import React from "react";
import "./HomePage.css"
import "./HomePageMd.css"

const HomePage = () => {
  return (
    <>
      <div className="Main_Home_Page">
        <div className="Main_Home_Page_Left ">
          <div className="Main_Home_Page_First_Small_Heading  All_NavLink_Common_Main_Heading">
            SO, YOU WANT TO TRAVEL TO
          </div>
          <div className="Main_Home_Page_Big_Heading ">SPACE</div>
          <div className="Main_Home_Page_Description All_Common_Description ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            perferendis corporis ipsum officiis numquam, quae pariatur magnam.
            Nostrum doloribus quod culpa illum temporibus quis in totam? Quasi
            eos vitae est.
          </div>
        </div>
        <div className="Main_Home_Page_Right">
          <div className="Explore_div">EXPLORE </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
