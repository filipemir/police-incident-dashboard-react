import {scaleOrdinal} from "d3-scale";
import {schemeSet3} from "d3-scale-chromatic";
import {CODE_GROUPS} from "../constants/codeGroups";

/**
 * Returns a scale to color the offense code groups
 */
export const codeGroupScale = scaleOrdinal(schemeSet3).domain(CODE_GROUPS);

export function filterIncidents({ incidentsByGroup, incidentGroups }) {
  return Object.values(incidentsByGroup).flatMap(i => i);
}

export function getIncidentGroups({ incidentsByGroup }) {
  const counts = [];

  Object.entries(incidentsByGroup).forEach(([group, incidents]) => {
    counts.push({ name: group, count: incidents.length })
  });

  counts.sort((a, b) => {
    if (a.name === 'Other') return 1;
    if (b.name === 'Other') return -1;
    return b.count - a.count;
  });

  return counts;
}