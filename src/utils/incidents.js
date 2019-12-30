import moment from 'moment';

/**
 *
 * @param incidents {Incident[]}
 * @returns {Incident[]}
 */
export function sortIncidentsByDescendingDate(incidents) {
    return incidents.sort((a, b) => {
        const dateA = moment(a.OCCURRED_ON_DATE),
            dateB = moment(b.OCCURRED_ON_DATE);
        return dateA.isValid() && dateB.isValid() ? dateB.diff(dateA) : -1;
    });
}
