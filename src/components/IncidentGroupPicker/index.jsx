import React from "react";

import "./styles.scss";
import {getIncidentGroups} from "../../utils/codeGroups";
import {codeGroupScale} from "../../utils/codeGroups";

export default function IncidentGroupPicker({  onGroupToggled, incidentsByGroup, visibleGroups }) {
  const groups = getIncidentGroups({ incidentsByGroup });

  return <div className={"incident-group-picker"}>
      {
        groups.map((group, i) =>{
          const { name , count } = group,
            isVisible = visibleGroups.has(name);
          return <label key={`input-group-${i}`} className={"group-checkbox"}>
            <div
              className={`input-group__circle`}
              style={{
                backgroundColor: isVisible ? codeGroupScale(name) : null,
                borderColor: isVisible ? codeGroupScale(name) : '#d3d3d3'
              }}
            />
            <input type="checkbox" checked={isVisible} onChange={() => onGroupToggled(name)}/>
              <span>{name}</span>
              <span className={"input-group__count"}>{count}</span>
          </label>;
        })
      }
    </div>;
}