import React from "react";
import Select from 'react-select';
import isEqual from "lodash/isEqual";

import "./styles.scss";
import { TIMEFRAMES } from "../../constants/timeframes";

const options = TIMEFRAMES.map(t => {
  return { value: t, label: `${t.value} ${t.unit}` }
});

export default function TimeframePicker({ timeframe, endDate, onTimeframeChange }) {
  const timeframeIndex = TIMEFRAMES.findIndex(t => isEqual(t, timeframe));

  return <div className={"timeframe-picker"}>
      <Select
        className={"timeframe-picker__selector"}
        value={options[timeframeIndex]}
        onChange={t => onTimeframeChange(t.value)}
        options={options}
      />
      <div className={"timeframe-picker__note"}>Sadly, for now this is actually ending on {`${endDate.format("MM-DD-YY")}`} because the data stopped flowing after that</div>
    </div>;
}