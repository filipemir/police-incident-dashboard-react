import React from "react";
import isEqual from "lodash/isEqual";

import "./styles.scss";
import { TIMEFRAMES } from "../../constants/timeframes";
import {getIncidentGroups} from "../../utils/codeGroups";

export default function Controls({ timeframe, endDate, onTimeframeChange, onGroupToggled, incidentsByGroup, visibleGroups }) {
  const timeframeIndex = TIMEFRAMES.findIndex(t => isEqual(t, timeframe)),
    groups = getIncidentGroups({ incidentsByGroup });

  return <div className={"map-controls"}>
    <div className={"timeframe-picker"}>
      <span>{`Timeframe (ending ${endDate.format("MM-DD-YY")}):`}</span>
      <select className={"timeframe-picker__selector"} value={timeframeIndex} onChange={evt => onTimeframeChange(TIMEFRAMES[evt.target.value])}>
        {TIMEFRAMES.map((t, i) => {
          const { value, unit } = t;
          return <option key={`timeframe-${i}`} value={i}>{`${value} ${unit}`}</option>
        })}
      </select>
    </div>

    <div>
      {
        groups.map((group, i) =>{
          const { name , count } = group;
          return <label key={`input-group-${i}`} className={"group-checkbox"}>
            <input type="checkbox" checked={visibleGroups.has(name)} onChange={() => onGroupToggled(name)}/>
            {name} ({count})
          </label>;
        })
      }
    </div>
  </div>
}