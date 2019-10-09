import geojson from "geojson";
import { scaleOrdinal } from "d3-scale";
import { schemeSet3 } from "d3-scale-chromatic";

const BASE_SQL_QUERY_URL = `https://cors-anywhere.herokuapp.com/https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;

/**
 * Returns a collection of geoJSON objects representing incidents
 * @param startDate - moment date
 * @param endDate - moment date
 */
export function getIncidents({ startDate, endDate }) {
    const sqlQuery = `SELECT * from "12cb3883-56f5-47de-afa5-3b1cf61b257b" WHERE "OCCURRED_ON_DATE" BETWEEN '${startDate}' and '${endDate}'`;

    return fetch(BASE_SQL_QUERY_URL + sqlQuery)
        .then(res => res.json())
        .then(json => geojson.parse(json.result.records, {Point: ['Lat', 'Long']}));
}


/**
 * Returns a scale to color the offense code groups
 */
const codeGroups = [
    'Firearm Violations',
    'Confidence Games',
    'Larceny From Motor Vehicle',
    'Towed',
    'Property Related Damage',
    'Missing Person Located',
    'Auto Theft Recovery',
    'INVESTIGATE PERSON',
    'Harbor Related Incidents',
    'Service',
    'Harassment',
    'Landlord / Tenant Disputes',
    'Property Found',
    'HUMAN TRAFFICKING',
    'Vandalism',
    'License Violation',
    'Robbery',
    'License Plate Related Incidents',
    'Counterfeiting',
    'Warrant Arrests',
    'Disorderly Conduct',
    'Motor Vehicle Accident Response',
    'Biological Threat',
    'Embezzlement',
    'Ballistics',
    'Prisoner Related Incidents',
    'Other Burglary',
    'Verbal Disputes',
    'Auto Theft',
    'Medical Assistance',
    'Restraining Order Violations',
    'Manslaughter',
    'Larceny',
    'Evading Fare',
    'Aircraft',
    'Drug Violation',
    'Bomb Hoax',
    'Fire Related Reports',
    'HUMAN TRAFFICKING - INVOLUNTARY SERVITUDE',
    'Criminal Harassment',
    'HOME INVASION',
    'Search Warrants',
    'Homicide',
    'Fraud',
    'Prostitution',
    'Explosives',
    'Residential Burglary',
    'Operating Under the Influence',
    'Recovered Stolen Property',
    'Other',
    'Liquor Violation',
    'Commercial Burglary',
    'Gambling',
    'Investigate Person',
    'Aggravated Assault',
    'Simple Assault',
    'Property Lost',
    'Phone Call Complaints',
    'Missing Person Reported',
    'Burglary - No Property Taken',
    'Arson',
    'Firearm Discovery',
    'Assembly or Gathering Violations',
    'Police Service Incidents',
    'Violations',
    'Offenses Against Child / Family',
    'Investigate Property',
];

export const codeGroupScale = scaleOrdinal(schemeSet3).domain(codeGroups)