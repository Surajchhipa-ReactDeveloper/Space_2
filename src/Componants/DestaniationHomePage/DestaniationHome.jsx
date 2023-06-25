import React, { useState } from "react";
import "./DestaniationHome.css";
import "./DestaniationHomeMd.css";
import { Images } from "../../Constant/imagePath";
const DestinationLink = [
  {
    id: 1,
    Links: "MOON",
  },
  {
    id: 2,
    Links: "MARS",
  },
  {
    id: 3,
    Links: "EUROPA",
  },
  {
    id: 4,
    Links: "TITAN",
  },
];
const DestinationHome = () => {
  const [Links, setLinks] = useState("MOON");
  const [earthImg, setEarthImg] = useState(Images.Destination_1);
  const [earthName, setEarthName] = useState("MOON");
  const [earthAbout, setEarthAbout] = useState(
    "See our planet as you've naver seen it before.A perfect relaxing trip away to help regain perspective and come back refreshed. while you,re there, take in some history by visting the Luna 2 and Apollo 11 landing sites."
  );
  const [distance, setDistance] = useState("384,400 KM");
  const [duration, setDuration] = useState("3 MONTHS");
  const [isActive, setIsActive] = useState(0);
  const ChangeDataEarth = (links, index) => {
    switch (links) {
      case "MOON": {
        setEarthImg(Images.Destination_1);
        setEarthName("MOON");
        setEarthAbout(
          "See our planet as you've naver seen it before.A perfect relaxing trip away to help regain perspective and come back refreshed. while you,re there, take in some history by visting the Luna 2 and Apollo 11 landing sites."
        );
        setDistance("384,400 KM");
        setDuration("3 MONTHS");
        setIsActive(index);
        break;
      }
      case "MARS": {
        setEarthImg(Images.Destination_2);
        setEarthName("MARS");
        setEarthAbout(
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. it's two and a half times the size of Everest"
        );
        setDistance("225, MIL KM");
        setDuration("9 MONTHS");
        setIsActive(index);
        break;
      }
      case "EUROPA": {
        setEarthImg(Images.Destination_3);
        setEarthName("EUROPA");
        setEarthAbout(
          "The smallest of the four Galilean moons orbiting Jupiter Europa is a winter Lover's Dream. with an icy surface ,it's perfect for a bit of ice skating ,curling ,hockey,or simple relaxation in your snug wintery cabin."
        );
        setDistance("628, MIL KM");
        setDuration("3 YEARS");
        setIsActive(index);
        break;
      }
      case "TITAN": {
        setEarthImg(Images.Destination_4);
        setEarthName("TITAN");
        setEarthAbout("The only moon Known to have a dense atmosphere other then Earth,Titan is a home away from home ( just a few hundred degrees colder! ) As a bonus ,you get striking views of the Rings of Saturn");
        setDistance("1.6, BIL KM");
        setDuration("7 YEARS");
        setIsActive(index);
        break;
      }
      default:
        break;
    }
  };
  return (
    <>
      <div className="DestinationHome_Main_Container">
        <div className="Destination_Container_Main_Heading ">
          <div className="Destination_LIght_Color_Heading_Number ALL_LIght_Heading_Number">
            01
          </div>
          <div className="Destination_LIght_Color_Heading_Number All_NavLink_Common_Main_Heading">
            PICK YOUR DESTINATION
          </div>
        </div>
        <div className="Destination_Left_Right_Container">
          <div className="Destination_Left_Container ">
            <img src={earthImg} alt="" className="ALL_Earth_Img" />
          </div>
          <div className="Destination_Right_Container">
            <div className="Destination_Navbar ">
              {DestinationLink.map((item, index) => {
                return (
                  <>
                    <div
                      className={`Destination_Links  Destination_Common_Connected_Link_a ${
                        isActive === index
                          ? "Destination_Links Active_Link_Destination"
                          : ""
                      }`}
                      onClick={() => ChangeDataEarth(item.Links, index)}
                      key={index + item.id}
                      style={{
                        borderBottom:
                          isActive === index ? "3px solid white" : "",
                        // paddingBottom: isActive === index ? "" : "",
                      }}
                    >
                      {item.Links}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="Destination_Changing_Data">
              <div className="Destination_Data_Main_Heading Destination_Common_Heading">
                {earthName}
              </div>
              <div className="Destination_Data_About All_Common_Description">
                {earthAbout}
              </div>
              <div className="Destination_Distance_And_Time">
                <div className="Distance CDT-ss">
                  <div className="Distance_Heading">AVG. DISTANCE</div>
                  <div className="Destination_Value">{distance}</div>
                </div>
                <div className="Travel_Time CDT-ss">
                  <div className="Distance_Heading">EST. TRAVEL TIME</div>
                  <div className="Destination_Value">{duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationHome;
