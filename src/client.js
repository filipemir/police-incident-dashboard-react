import geojson from "geojson";

const BASE_SQL_QUERY_URL = `https://cors-anywhere.herokuapp.com/https://data.boston.gov/api/3/action/datastore_search_sql?sql=`,
  DATE_FORMAT = 'YYYY-MM-DD hh:mm';

/**
 * Returns a collection of geoJSON objects representing incidents
 * @param startDate - moment date
 * @param endDate - moment date
 */
export function getIncidents({ startDate, endDate }) {
    const sqlQuery = `SELECT * from "12cb3883-56f5-47de-afa5-3b1cf61b257b" WHERE "OCCURRED_ON_DATE" BETWEEN '${startDate.format(DATE_FORMAT)}' and '${endDate.format(DATE_FORMAT)}'`;

    return fetch(BASE_SQL_QUERY_URL + sqlQuery)
        .then(res => res.json())
        .then(json => geojson.parse(json.result.records, {Point: ['Lat', 'Long']}));
}
