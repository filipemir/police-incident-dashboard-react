import React from "react";

import "./styles.scss";
import TimeframePicker from "../TimeframePicker";
import IncidentGroupPicker from "../IncidentGroupPicker";

export default function Menu({ timeframe, endDate, onTimeframeChange, onGroupToggled, incidentsByGroup, visibleGroups }) {
  return <div className={"menu-root"}>
    <div className={"menu-title"}>
      <h1>Boston <br /> Police Incidents</h1>
    </div>
    <div className={"menu-content"}>
      <div className={"menu-section"}>
        <h2 className={"menu-section-title"}>Date Range</h2>
        <TimeframePicker endDate={endDate} timeframe={timeframe} onTimeframeChange={onTimeframeChange} />
      </div>
      <div className={"menu-section"}>
        <h2 className={"menu-section-title"}>Incident Groups</h2>
        <IncidentGroupPicker incidentsByGroup={incidentsByGroup} visibleGroups={visibleGroups} onGroupToggled={onGroupToggled} />
      </div>
    </div>
  </div>
}