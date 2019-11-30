import React, { useState, useEffect } from 'react';
import moment from "moment";

import Map from "./components/Map";
import Controls from "./components/Controls";
import './styles/global.scss';
import {ONE_DAY} from "./constants/timeframes";
import {getTimeframeDates} from "./utils/timeframes";
import {getIncidents} from "./utils/client";

// TODO: End date should be the present but BPD hasn't been updating their data while they work on
// switching something or other about their systems, so for now we have to work with stale data
const END_DATE = moment("2019-09-20");

export default function App() {
  const [timeframe, setTimeframe] = useState(ONE_DAY),
    [{ endDate }, setDates] = useState({ endDate: END_DATE }),
    [incidents, setIncidents] = useState([]);

  useEffect(() => {
      const { startDate, endDate } = getTimeframeDates({ timeframe, endDate: END_DATE }),
        refreshIncidents = () => {
            getIncidents({ startDate, endDate }).then(i => { setIncidents(i) });
        };

      // Update dates in state:
      setDates({ startDate, endDate });

      // Refresh incidents in map
      refreshIncidents();

      // Reset incidents periodically so new ones show up:
      const intervalId = setInterval(refreshIncidents, 60 * 1000);
      return () => clearInterval(intervalId);
  }, [timeframe]);

  return <div id="app-root">
      <Controls timeframe={timeframe} endDate={endDate} onChange={setTimeframe} />
      <Map incidents={incidents} />
  </div>;
}