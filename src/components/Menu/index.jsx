import React from "react";

import "./styles.scss";
import TimeframePicker from "../TimeframePicker";
import IncidentGroupPicker from "../IncidentGroupPicker";

export default function Menu({ timeframe, endDate, onTimeframeChange, onGroupToggled, incidentsByGroup, visibleGroups }) {
  return <div className={"map-controls"}>
    <TimeframePicker endDate={endDate} timeframe={timeframe} onTimeframeChange={onTimeframeChange} />
    <IncidentGroupPicker incidentsByGroup={incidentsByGroup} visibleGroups={visibleGroups} onGroupToggled={onGroupToggled} />
  </div>
}