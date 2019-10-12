import React from "react";
import isEqual from "lodash/isEqual";

import "./styles.scss";
import { TIMEFRAMES } from "../../constants/timeframes";

export default function Controls({ timeframe, endDate, onChange }) {
  const timeframeIndex = TIMEFRAMES.findIndex(t => isEqual(t, timeframe));

  return <div className={"map-controls"}>
    <div className={"timeframe-picker"}>
      <span>{`Timeframe (ending ${endDate.format("MM-DD-YY")}):`}</span>
      <select className={"timeframe-picker__selector"} value={timeframeIndex} onChange={evt => onChange(TIMEFRAMES[evt.target.value])}>
        {TIMEFRAMES.map((t, i) => {
          const { value, unit } = t;
          return <option key={`timeframe-${i}`} value={i}>{`${value} ${unit}`}</option>
        })}
      </select>
    </div>
  </div>
}