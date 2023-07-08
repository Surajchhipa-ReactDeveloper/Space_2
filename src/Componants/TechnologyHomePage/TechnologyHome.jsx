import React, { useState } from "react";
import "./TechnologyHome.css";
import "./TechnologyHomeMd.css";
import { Images } from "../../Constant/imagePath";
const TechnologyChangeButton = [
  {
    id: 1,
    Number: "1",
  },
  {
    id: 2,
    Number: "2",
  },
  {
    id: 3,
    Number: "3",
  },
];
const TechnologyHome = () => {
  const [buttonNumber, setButtonNumber] = useState();
  const [techName, setTechName] = useState("THE TERMINOLOGY");
  const [techType, setTechType] = useState("LAUNCH VEHICLE");
  const [techAbout, setTechAbout] = useState(
    "A launched vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space , usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall,it's quite an awe-inspiring sight on the launch pad! "
  );
  const [techImg, setTechImg] = useState(Images.Technology_1);
  const [techImgTable, setTechImgTable] = useState(Images.Technology_Tablet_1);
  const [isActive, setIsActive] = useState(0);

  const ChangeDataTechnology = (button, index) => {
    switch (button) {
      case "1": {
        setTechName("THE TERMINOLOGY");
        setTechType("LAUNCH VEHICLE");
        setTechAbout(
          "A launched vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space , usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall,it's quite an awe-inspiring sight on the launch pad! "
        );
        setTechImg(Images.Technology_1);
        setTechImgTable(Images.Technology_Tablet_1);
        setIsActive(index);
        break;
      }
      case "2": {
        setTechName("THE TERMINOLOGY");
        setTechType("SPACEPORT");
        setTechAbout(
          "A spaceport or cosmodrome is a site for launching (or receiving)spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral,our spaceport is ideally situated to take advantage of the Earth's rotation for launched"
        );
        setTechImg(Images.Technology_2);
        setTechImgTable(Images.Technology_Tablet_2);

        setIsActive(index);

        break;
      }
      case "3": {
        setTechName("THE TERMINOLOGY");
        setTechType("SPACE CAPSULE");
        setTechAbout(
          "A space capsule is an often-crewed space that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. our capsule is where you'll spend your time during the flight. it includes a space gym,cinema,and plenty of other activities to keep you entertained."
        );
        setTechImg(Images.Technology_3);
        setTechImgTable(Images.Technology_Tablet_3);

        setIsActive(index);

        break;
      }
      default:
        break;
    }
  };
  return (
    <>
      <div className="Technology_Main_Container">
        <div className="Technology_Main_Container_Heading">
          <div className="Technology_LIght_Color_Heading_Number ALL_LIght_Heading_Number">
            03
          </div>
          <div className="Technology_LIght_Color_Heading_Number All_NavLink_Common_Main_Heading">
            SPACE LAUNCH 101
          </div>
        </div>
        <div className="Technology_Left_Right_Container">
          <div className="Technology_Left_Container">
            <div className="Technology_Left_First_Container ">
              {TechnologyChangeButton.map((item, index) => {
                return (
                  <>
                    <div
                      className={`Technology_Active_Button red ${
                        isActive === index ? "Technology_Active_Button " : ""
                      }`}
                      key={index + item.id}
                      onClick={() => ChangeDataTechnology(item.Number, index)}
                      style={{
                        backgroundColor: isActive === index ? "white" : "",
                        color: isActive === index ? "black" : "",
                      }}
                    >
                      {item.Number}
                    </div>
                  </>
                );
              })}
            </div>

            <div className="Technology_Left_Second_Container">
              <div className="Technology_Type Terminology_Small_Heading">
                {techName}
              </div>
              <div className="Technology_Name CREW_And_TerMinoLogy_Common_Heading">
                {techType}
              </div>
              <div className="Technology_About_Description All_Common_Description">
                {techAbout}
              </div>
            </div>
          </div>
          <div className="Technology_Right_Container">
            <div className="Technology_Image">
              <img src={techImg} alt="" className="All_Terminology_Img" />
            </div>
          </div>
          <div className="Technology_Right_Container_Second">
            <div className="Technology_Image_Table">
              <img
                src={techImgTable}
                alt=""
                className="All_Terminology_Img_Table"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyHome;
