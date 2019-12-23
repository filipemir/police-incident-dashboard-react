import React, { useState } from "react";

import "./styles.scss";
import {getIncidentGroups} from "../../utils/codeGroups";
import {codeGroupScale} from "../../utils/codeGroups";

const COLLAPSED_NUM = 5;

export default function IncidentGroupPicker({  onGroupToggled, incidentsByGroup, visibleGroups }) {
  const [isExpanded, setExpanded] = useState(false);
  let groups = getIncidentGroups({ incidentsByGroup }),
    totalGroups = groups.length;

  if (!isExpanded) {
    groups = groups.slice(0, COLLAPSED_NUM);
  }

  return <div className={"incident-group-picker"}>
      {
        groups.map((group, i) =>{
          const { name , count } = group,
            isVisible = visibleGroups.has(name);
          return <label key={`input-group-${i}`} className={`group-checkbox ${isVisible ? '' : 'inactive'}`}>
            <div
              className={`input-group__circle`}
              style={{
                backgroundColor: isVisible ? codeGroupScale(name) : null,
                borderColor: isVisible ? codeGroupScale(name) : '#d3d3d3'
              }}
            />
            <input type="checkbox" checked={isVisible} onChange={() => {
              setExpanded(true);
              onGroupToggled(name);
            }}/>
              <span className={"input-group__name"}>{name}</span>
              <span className={"input-group__count"}>{count}</span>
          </label>;
        })
      }
    {isExpanded && <div className={"incident-group-bulk-actions"}>
      <div className={"incident-group-bulk-action"} onClick={() => {}}>
        <span>Select All</span>
      </div>
        <div className={"incident-group-bulk-action"} onClick={() => {}}>
        <span>Unselect All</span>
      </div>
    </div>}
    <div className={"incident-group-expander"} onClick={() => setExpanded(!isExpanded)}>
      <span>{isExpanded ? `Collapse` : `${totalGroups - COLLAPSED_NUM} More Groups`}</span>
    </div>
  </div>;
}