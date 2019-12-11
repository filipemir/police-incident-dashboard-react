import React from "react";

import "./styles.scss";
import {getIncidentGroups} from "../../utils/codeGroups";

export default function IncidentGroupPicker({  onGroupToggled, incidentsByGroup, visibleGroups }) {
  const groups = getIncidentGroups({ incidentsByGroup });

  return <div className={"incident-group-picker"}>
      {
        groups.map((group, i) =>{
          const { name , count } = group;
          return <label key={`input-group-${i}`} className={"group-checkbox"}>
            <input type="checkbox" checked={visibleGroups.has(name)} onChange={() => onGroupToggled(name)}/>
            {name} ({count})
          </label>;
        })
      }
    </div>;
}