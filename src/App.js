import React from 'react';
import moment from 'moment';

import IncidentMap from "./components/Map";
import './styles/global.scss';

const DATE_FORMAT = 'YYYY-MM-DD hh:mm';

export default function App() {
  const endDate = moment().format(DATE_FORMAT),
      startDate = moment().subtract(72, 'hours').format(DATE_FORMAT);

  return <IncidentMap latLong={[42.3, -71.0589]} startDate={startDate} endDate={endDate} />;
}