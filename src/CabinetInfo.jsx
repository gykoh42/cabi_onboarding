import React from "react";
import styled from "styled-components";

const CabinetItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 45px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 10px;
  margin: 5px;
  background-color: ${({ $available }) => ($available ? "#9747ff" : "#eeeeee")};
  color: ${({ $available }) => ($available ? "white" : "black")};
`;

function CabinetInfo({ cabinetId, status, user }) {
  const available = status === "AVAILABLE";
  const userIcon = available
    ? "src/assets/user_white.svg"
    : "src/assets/user.svg";

  const numberStyle = {
    right: cabinetId.toString().length === 1 ? "-62px" : "-54px",
  };

  return (
    <CabinetItem $available={available ? 1 : 0}>
      <img className="icon" src={userIcon} alt="user icon" />
      <span className="number" style={numberStyle}>
        {cabinetId}
      </span>
      <span className="font">{user ? user : "-"}</span>
    </CabinetItem>
  );
}

export default CabinetInfo;
