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
    return state.counts.visibleTotal;
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
    const { counts } = state;

    const result = Object.keys(counts.perGroup);

    result.sort((a, b) => {
        if (a === 'Other') return 1;
        if (b === 'Other') return -1;
        return counts[b] - counts[a];
    });

    return result;
}
