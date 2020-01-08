# [WIP] Boston Police Incident Dashboard

A visualization of crime incidents as reported by the Boston Police department. See it
here: https://filipemir.github.io/police-incident-dashboard-react/

This is a project initially started by Code for Boston volunteers during the 2019 National Day of Civic Hacking.
The goal is to create a dashboard that can be used by the DA's staff, investigators, legal advocates, watchdogs, and 
researchers to better understand how law enforcement is coming in contact with the community.  

We're currently tracking the work we need to do [here](https://github.com/filipemir/police-incident-dashboard-react/issues). 
PRs are very welcome!

## Technology

The dashboard is a lightweight static web app that queries the City of Boston's data API directly for its data.
We might consider adding a backend later down the road if the requirements evolve beyond what we can do with the data
we can easily query from the city's API

Stack thus far:
* Frontend app bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* [Leaflet](https://leafletjs.com/) maps
* Deployed on github pages using `gh-pages` npm module

## Data

The app relies on data made available by the City of Boston which is updated in real-time as incident reports are
filed by BPD officers. The database is a postgres DB fronted through a CKAN API. In practice this means we submit SQL
statements through a REST endpoint to get the data we need.

Take a peek at the data on the data.boston.gov website: https://data.boston.gov/dataset/crime-incident-reports-august-2015-to-date-source-new-system/resource/12cb3883-56f5-47de-afa5-3b1cf61b257b

And some sample queries through the API:

```
# Incidents by date:
https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT * from "12cb3883-56f5-47de-afa5-3b1cf61b257b" WHERE "OCCURRED_ON_DATE" BETWEEN '2019-09-19 00:00' and '2019-09-20 00:00' limit 10

# Total number of incidents
https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT COUNT("_id") from "12cb3883-56f5-47de-afa5-3b1cf61b257b"

# Total number of incidents bogus Lat/Longs
https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT COUNT("_id") from "12cb3883-56f5-47de-afa5-3b1cf61b257b" where "Lat" = '-1' or "Long" = '-1' or "Lat" is NULL or "Long" is NULL

```

## Development

* `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
* `npm run deploy`: Builds the app for production to the `build` folder, commits it to the `gh-pages` branch, which will update the 
deployed version of the app.

## Vizualization Wishlist

A quick list of ideas we brainstomed during NDCH 2019: 

* Real-time Map of Incidents, color-coded and filterable by type and time 
* Change in Incident Rates (by type) over time
* Impact of DA office actions (layer of Data to add)
* Overlay Boston Police neighborhoods SHP files
* Court loads by jurisdiction (aggregate by Nasser's SHP files)
* Field Interrogation and Observation (FIO) -> Stop and Frisk data on data.boston.gov (stale data not update since Dec 2016 sadoy)

## Other Resources

* [Original prompt from the the Suffolk County's District Attorney's office](https://docs.google.com/document/d/1uvlIs0Ru8NH7mWyzjg93if582O_DWkjcb24i83Dttss/)
* Additional data
    * City of Boston Police Districts shape files: https://bostonopendata-boston.opendata.arcgis.com/datasets/9a3a8c427add450eaf45a470245680fc_5?geometry=-71.618%2C42.182%2C-70.575%2C42.36
    * Boston Stop and Frisk Data to layer (STALE DATA - NO UPDATES SINCE DEC 2016): https://data.boston.gov/dataset/boston-police-department-fio 
    * Boston Police Districts geography: https://data.boston.gov/dataset/police-districts
    * Boston Police Station locations: https://data.boston.gov/dataset/boston-police-stations
    * DA Rachel Rollins Policy Memo published March 25, 2019: https://www.suffolkdistrictattorney.com/press-releases/items/2019/3/25/district-attorney-rollins-releases-comprehensive-policy-memo