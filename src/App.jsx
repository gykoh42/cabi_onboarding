import { useState, useEffect } from "react";
import axios from "axios";
import CabinetSection from "./CabinetSection";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(2);
  const [selectedSection, setSelectedSection] = useState("A");

  useEffect(() => {
    axios.get("http://localhost:3000/floors").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
    setSelectedSection("A");
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const currentSectionData = data
    .find((floor) => floor.floorNumber === selectedFloor)
    ?.sections.find((section) => section.section === selectedSection);

  return (
    <>
      <nav className="topNavigation">
        <div className="leftSection">
          <img
            className="loginIcon"
            src="src/assets/Vector 139.svg"
            alt="login icon"
          />
          <span className="cabiText">Cabi</span>
        </div>
        <div className="rightSection">
          <img
            className="userIcon"
            src="src/assets/account_circle.svg"
            alt="user icon"
          />
          <img
            className="packageIcon"
            src="src/assets/package.svg"
            alt="package icon"
          />
        </div>
      </nav>
      <div className="content">
        <nav className="sideNavs">
          <nav className="leftNavigation">
            <ul>
              <li>Home</li>
              {data.map((floor) => (
                <li
                  key={floor.floorNumber}
                  className={
                    selectedFloor === floor.floorNumber ? "selected" : ""
                  }
                  onClick={() => handleFloorClick(floor.floorNumber)}
                >
                  {floor.floorNumber}층
                </li>
              ))}
            </ul>
          </nav>
          <nav className="leftSectionNavigation">
            <ul>
              {["A", "B", "C"].map((section) => (
                <li
                  key={section}
                  className={selectedSection === section ? "selected" : ""}
                  onClick={() => handleSectionClick(section)}
                >
                  {section}
                </li>
              ))}
            </ul>
          </nav>
        </nav>
        <div className="mainSection" id="mainSection">
          {currentSectionData && (
            <CabinetSection
              floorNumber={selectedFloor}
              section={selectedSection}
              cabinets={currentSectionData.cabinets}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
