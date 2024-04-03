import { useState, useEffect } from "react";
import styled from "styled-components";
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

  const currentFloorData = data.find(
    (floor) => floor.floorNumber === selectedFloor
  );

  const currentSectionData = data
    .find((floor) => floor.floorNumber === selectedFloor)
    ?.sections.find((section) => section.section === selectedSection);

  const sectionLabels = currentFloorData
    ? currentFloorData.sections.map((section) => section.section)
    : [];

  return (
    <>
      <TopNavigation>
        <LeftSection>
          <LoginIcon src="src/assets/Vector 139.svg" alt="login icon" />
          <span className="cabiText">Cabi</span>
        </LeftSection>
        <RightSection>
          <UserIcon src="src/assets/account_circle.svg" alt="user icon" />
          <PackageIcon src="src/assets/package.svg" alt="package icon" />
        </RightSection>
      </TopNavigation>
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
              {sectionLabels.map((section) => (
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

const LoginIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 8px;
`;

const UserIcon = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  margin-right: 16px;
`;

const PackageIcon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const TopNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  background-color: #9747ff;
  padding: 20px;
`;

export default App;
