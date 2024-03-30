import React from "react";
import CabinetInfo from "./CabinetInfo";

function CabinetSection({ floorNumber, section, cabinets }) {
  return (
    <div>
      <p className="sectionTitle">{`${floorNumber}층 - ${section}`}</p>
      <ul>
        {cabinets.map((cabinet) => (
          <CabinetInfo
            key={cabinet.cabinetId}
            cabinetId={cabinet.cabinetId}
            user={cabinet.user}
            status={cabinet.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default CabinetSection;
