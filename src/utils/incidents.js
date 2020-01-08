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

export function filterIncidents(incidents) {
    let nullsCount = 0,
        zerosCount = 0;

    const result = incidents.filter(incident => {
        if (!incident.Lat || !incident.Long) {
            nullsCount += 1;
            return false;
        }

        const lat = parseInt(incident.Lat, 10),
            long = parseInt(incident.Long, 10);

        if (lat === 0 || long === 0) {
            zerosCount += 1;
            return false;
        }

        return true;
    });

    nullsCount && console.log(`Omitting ${nullsCount} incidents with null lat/longs`);
    zerosCount && console.log(`Omitting ${zerosCount} incidents with 0s for lat/longs`);

    return result;
}
