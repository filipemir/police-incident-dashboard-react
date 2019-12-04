import incidentGroups from "../static/incident-groups.json"

const BASE_SQL_QUERY_URL = `https://cors-anywhere.herokuapp.com/https://data.boston.gov/api/3/action/datastore_search_sql?sql=`,
  DATE_FORMAT = 'YYYY-MM-DD hh:mm';

/**
 * Returns an object mapping offense code groups to arrays of incidents
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

    // Group records:
    const recordsByGroup = {};
    json.result.records.forEach(r => {
      const code = parseInt(r["OFFENSE_CODE"], 10),
        group = incidentGroups[code].GROUP;

      !recordsByGroup[group] && (recordsByGroup[group] = []);

       recordsByGroup[group].push(r);
    });

    return recordsByGroup;
}
