/**
 * @param state {IncidentsState}
 * @returns {number}
 */
export function getTotalIncidentCount(state) {
    return state.counts.total;
}

/**
 * @param state {IncidentsState}
 * @returns {number}
 */
export function getVisibleIncidentCount(state) {
    return state.counts.totalVisible;
}

/**
 * @param state {IncidentsState}
 * @returns {Incident[]}
 */
export function getAllIncidents(state) {
    return state.incidents.sortedByDate;
}

/**
 * @param state {IncidentsState}
 * @returns {Incident[]}
 */
export function getVisibleIncidents(state) {
    const { visibleIds, map } = state.incidents,
        result = [];

    visibleIds.forEach(id => {
        result.push(map[id]);
    });

    return result;
}

export function getVisibleIncidentsSortedByDate(state) {
    const { visibleIds, sortedByDate } = state.incidents,
        result = [];

    sortedByDate.forEach(i => {
        visibleIds.has(i._clientSideId) && result.push(i);
    });

    return result;
}

/**
 * @param state {IncidentsState}
 * @returns {Set<string>}
 */
export function getVisibleIncidentGroups(state) {
    return state.filters.visibleGroups;
}

/**
 * @param state {IncidentsState}
 * @returns {Set<string>}
 */
export function getVisibleDistricts(state) {
    return state.filters.visibleDistricts;
}

/**
 * @param state {IncidentsState}
 * @param {object}
 *  @param group {string}
 * @returns {number}
 */
export function getIncidentCountInGroup(state, { group }) {
    return state.counts.perGroup[group];
}

/**
 * @param state {IncidentsState}
 * @param {object}
 *  @param district {string}
 * @returns {number}
 */
export function getIncidentCountInDistrict(state, { district }) {
    return state.counts.perDistrict[district];
}

/**
 * Returns an array of group names sorted in descending order by their incident
 * count (except for 'Other' which goes to the bottom regardless)
 *
 * @param state {IncidentsState}
 * @returns {string[]}
 */
export function getSortedIncidentGroups(state) {
    const { perGroup } = state.counts,
        result = Object.keys(perGroup);

    result.sort((a, b) => {
        if (a === 'Other') return 1;
        if (b === 'Other') return -1;
        return perGroup[b] - perGroup[a];
    });

    return result;
}

/**
 * Returns an array of districts sorted in descending order by their incident
 * count
 *
 * @param state {IncidentsState}
 * @returns {string[]}
 */
export function getSortedDistricts(state) {
    const { perDistrict } = state.counts,
        result = Object.keys(perDistrict);

    result.sort((a, b) => {
        return perDistrict[b] - perDistrict[a];
    });

    return result;
}
