import React, { useState, useEffect } from 'react';
import moment from "moment";

import Map from "./components/Map";
import Menu from "./components/Menu";
import './styles/global.scss';
import {ONE_DAY} from "./constants/timeframes";
import {getTimeframeDates} from "./utils/timeframes";
// import {getIncidents} from "./utils/client";
import {getIncidents} from "./mocks/client";
import useIncidentsReducer, {LOAD_INCIDENTS, TOGGLE_INCIDENT_GROUP} from "./hooks/useIncidentsReducer";

// TODO: End date should be the present but BPD hasn't been updating their data while they work on
// switching something or other about their systems, so for now we have to work with stale data
const END_DATE = moment("2019-09-20");

export default function App() {
  const [timeframe, setTimeframe] = useState(ONE_DAY),
    [dates, setDates] = useState({ endDate: END_DATE }),
    { endDate } = dates,
    [incidentsState, dispatchIncidentsAction] = useIncidentsReducer(),
    { incidentsByGroup, visibleGroups, visibleIncidents } = incidentsState;

  useEffect(() => {
      const { startDate, endDate } = getTimeframeDates({ timeframe, endDate: END_DATE }),
        refreshIncidents = () => {
            getIncidents({ startDate, endDate }).then(incidentsByGroup => {
              dispatchIncidentsAction({ type: LOAD_INCIDENTS, payload: { incidentsByGroup }})
            });
        };

      // Update dates in state:
      setDates({ startDate, endDate });

      // Refresh incidents in map:
      refreshIncidents();

      // Reset incidents periodically so new ones show up:
      const intervalId = setInterval(refreshIncidents, 60 * 1000);
      return () => clearInterval(intervalId);
  }, [timeframe, dispatchIncidentsAction]);

  return <div id="app-root">
      <Menu
        incidentsByGroup={incidentsByGroup}
        visibleGroups={visibleGroups}
        timeframe={timeframe}
        endDate={endDate}
        onTimeframeChange={setTimeframe}
        onGroupToggled={group => dispatchIncidentsAction({ type: TOGGLE_INCIDENT_GROUP, payload: { group } }) }
      />
      <Map incidents={visibleIncidents} />
  </div>;
}