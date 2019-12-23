import { useReducer } from "react";

const initialState = {
  incidentsByGroup: {},
  visibleGroups: new Set(),
  visibleIncidents: []
};

const LOAD_INCIDENTS = "load-incidents";
const TOGGLE_INCIDENT_GROUP = "toggle-group";
const HIDE_ALL_GROUPS = "hide-all-groups";
const SHOW_ALL_GROUPS = "show-all-groups";

function getVisibleIncidents({ incidentsByGroup, visibleGroups }) {
  const visibleIncidents = [];

  Object.entries(incidentsByGroup).forEach(([group, incidents]) => {
    visibleGroups.has(group) && visibleIncidents.push(...incidents) ;
  });

  return visibleIncidents;
}

function reduceLoadIncidents(state, payload) {
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

function reduceToggleIncidentGroup(state, payload) {
  const {group} = payload,
    {incidentsByGroup, visibleGroups} = state;

  visibleGroups.has(group) ? visibleGroups.delete(group) : visibleGroups.add(group);

  return {
    ...state,
    visibleGroups,
    visibleIncidents: getVisibleIncidents({incidentsByGroup, visibleGroups})
  };
}

function incidentsReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_INCIDENTS:
      return reduceLoadIncidents(state, payload);
    case TOGGLE_INCIDENT_GROUP:
      return reduceToggleIncidentGroup(state, payload);
    default:
      throw Error(`Invalid incidents reducer action: ${type}`)
  }
}

// Action factories
export function loadIncidents(incidentsByGroup) {
  return { type: LOAD_INCIDENTS, payload: { incidentsByGroup }}
}

export function toggleIncidentGroup(group) {
  return ({ type: TOGGLE_INCIDENT_GROUP, payload: { group } })
}

export default function useIncidentsReducer() {
  return useReducer(incidentsReducer, initialState);
}