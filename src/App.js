import React, { useState } from 'react';
import moment from "moment";

import Map from "./components/Map";
import Controls from "./components/Controls";
import './styles/global.scss';
import {ONE_DAY} from "./constants/timeframes";
import {getTimeframeDates} from "./utils/timeframes";


export default function App() {
  const [timeframe, setTimeframe] = useState(ONE_DAY),
    // TODO: End date should be the present but BPD hasn't been updating their data while they work on
    // switching something or other about their systems, so for now we have to work with stale data
    { startDate, endDate } = getTimeframeDates({ timeframe, endDate: moment("2019-09-20") });

  return <div id="app-root">
      <Controls timeframe={timeframe} endDate={endDate} onChange={(t) => setTimeframe(t)} />
      <Map latLong={[42.3, -71.0589]} startDate={startDate} endDate={endDate} />
  </div>;
}