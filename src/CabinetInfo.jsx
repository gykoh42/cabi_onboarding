import React from "react";
import styled from "styled-components";

function CabinetInfo({ cabinetId, status, user }) {
  const available = status === "AVAILABLE";
  const userIcon = available
    ? "src/assets/user_white.svg"
    : "src/assets/user.svg";

  return (
    <CabinetItem $available={available}>
      <Icon className="icon" src={userIcon} alt="user icon" />
      <Number $length={cabinetId.toString().length}>{cabinetId}</Number>
      <UserName>{user ? user : "-"}</UserName>
    </CabinetItem>
  );
}

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

const Icon = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 15px;
  width: 15px;
`;

const Number = styled.span`
  position: absolute;
  top: 10px;
  right: ${({ $length }) => ($length === 1 ? "8px" : "10px")};
  font-size: 12px;
`;

const UserName = styled.span`
  position: relative;
  align-self: flex-start;
  right: -1px;
  padding-left: 10px;
  text-align: left;
  font-size: 12px;
`;

export default CabinetInfo;
