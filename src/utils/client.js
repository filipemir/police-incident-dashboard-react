import incidentGroups from '../static/incident-groups.json';

const BASE_SQL_QUERY_URL = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=`,
    DATE_FORMAT = 'YYYY-MM-DD hh:mm';

/**
 * Counter used to generate unique ids for incoming incidents. Incremented after each incident is processed.
 * The incoming incidents do have a unique id as well, but this ensures that each id is in fact unique and
 * always available. That's likely true on the backend side as well but this way we didn't have to worry about it
 *
 * @type {number}
 */
let counter = 0;

/**
 * Returns an array of incidents
 *
 * @param startDate - moment date
 * @param endDate - moment date
 */
export async function getIncidents({ startDate, endDate }) {
    const sqlQuery = `SELECT * 
        FROM "12cb3883-56f5-47de-afa5-3b1cf61b257b" 
        WHERE "OCCURRED_ON_DATE" BETWEEN '${startDate.format(DATE_FORMAT)}' AND '${endDate.format(DATE_FORMAT)}'
    `;

    // Fetch records:
    const res = await fetch(BASE_SQL_QUERY_URL + sqlQuery),
        json = await res.json();

    return json.result.records.map(r => {
        counter += 1;
        return { ...r, _clientSideId: `_i${counter}` };
    });
}
