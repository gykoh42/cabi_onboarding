import React from "react";
import styled from "styled-components";
import CabinetInfo from "./CabinetInfo";

function CabinetSection({ floorNumber, section, cabinets }) {
  return (
    <>
      <SectionTitle>{`${floorNumber}층 - ${section}`}</SectionTitle>
      <CabinetList>
        {cabinets.map((cabinet) => (
          <CabinetInfo
            key={cabinet.cabinetId}
            cabinetId={cabinet.cabinetId}
            user={cabinet.user}
            status={cabinet.status}
          />
        ))}
      </CabinetList>
    </>
  );
}

const SectionTitle = styled.p`
  font-size: 16px;
  color: #333;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  margin: 10px 0;
`;

const CabinetList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
`;

export default CabinetSection;
