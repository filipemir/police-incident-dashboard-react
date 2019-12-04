import { useReducer } from "react";

const initialState = {
  incidentsByGroup: {},
  visibleGroups: new Set(),
  visibleIncidents: []
};

export const LOAD_INCIDENTS = "load-incidents";
export const TOGGLE_INCIDENT_GROUP = "toggle-group";

function getVisibleIncidents({ incidentsByGroup, visibleGroups }) {
  const visibleIncidents = [];

  Object.entries(incidentsByGroup).forEach(([group, incidents]) => {
    visibleGroups.has(group) && visibleIncidents.push(...incidents) ;
  });

  return visibleIncidents;
}

function incidentsReducer(state, action) {
  const { type, payload } = action;

  if (type === LOAD_INCIDENTS) {
    const { incidentsByGroup } = payload;
    let { visibleGroups } = state;

    if (state.visibleGroups.size === 0) {
      visibleGroups = new Set(Object.keys(incidentsByGroup));
    }

    return {
      ...state,
      incidentsByGroup,
      visibleGroups,
      visibleIncidents: getVisibleIncidents({ incidentsByGroup, visibleGroups })
    };
  }

  if (type === TOGGLE_INCIDENT_GROUP) {
    const {group} = payload,
      {incidentsByGroup, visibleGroups} = state;

    visibleGroups.has(group) ? visibleGroups.delete(group) : visibleGroups.add(group);

    return {
      ...state,
      visibleGroups,
      visibleIncidents: getVisibleIncidents({incidentsByGroup, visibleGroups})
    };
  }

  throw Error(`Invalid incidents reducer action: ${type}`)
}

export default function useIncidentsReducer() {
  return useReducer(incidentsReducer, initialState);
}