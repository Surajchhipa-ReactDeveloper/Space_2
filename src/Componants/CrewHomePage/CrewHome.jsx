import React, { useState, useRef, useEffect } from "react";
import "./CrewHome.css";
import "./CrewHomeMd.css";
import CrewHomeData from "./CrewHomeData";

const CrewHome = () => {
  const [CrewSlider] = useState(CrewHomeData);
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderRef = useRef(null);
  console.log(CrewHomeData[currentSlider].CrewName);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  });

  const goToNextSlide = () => {
    setCurrentSlider((prevIndex) => (prevIndex + 1) % CrewSlider.length);
  };
  const goToSlide = (index) => {
    setCurrentSlider(index);
  };

  return (
    <>
      <div className="Crew_Main_Container ">
        <div className="Crew_Container_Main_Heading ">
          <div className="Crew_LIght_Color_Heading_Number ALL_LIght_Heading_Number">
            02
          </div>
          <div className="Crew_LIght_Color_Heading_Number All_NavLink_Common_Main_Heading">
            MEET YOUR CREW
          </div>
        </div>
        <div className="Crew_Data_Access_Container">
          <div
            className={`Crew_Left_Right_Container  
                ${currentSlider === currentSlider ? "active" : ""}`}
          >
            {" "}
            <div className="Crew_Left_Container">
              <div className="Left_Data_Folder">
                <div className="Crew_Data_Main_Heading_Post">
                  {CrewHomeData[currentSlider].CrewPost}
                </div>
                <div className="Crew_Data_Main_Heading CREW_And_TerMinoLogy_Common_Heading">
                  {CrewHomeData[currentSlider].CrewName}
                </div>
                <div className="Crew_Data_About_Description All_Common_Description">
                  {CrewHomeData[currentSlider].CrewAbout}
                </div>
              </div>
              <div className="Position_Container">
                <div className="Data_Access_Dots">
                  {CrewSlider.map((item, index) => {
                    return (
                      <div
                        className={`Access_Dotes ${
                          index === currentSlider ? "ActiveCrew" : ""
                        }`}
                        key={index + item.id}
                        onClick={() => goToSlide(index)}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="Crew_Right_Container ">
              <div className="Crew_Images">
                <img
                  src={CrewHomeData[currentSlider].CrewImg}
                  alt=""
                  className="All_Crew_Img "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrewHome;
