import React from 'react';
import { BarLoader } from 'react-spinners';

import './styles.scss';
import TimeframePicker from '../TimeframePicker';
import IncidentGroupPicker from '../IncidentGroupPicker';

export default function Menu({
    isLoadingIncidents,
    incidentCount,
    timeframe,
    dates,
    onTimeframeChange,
    onGroupToggled,
    incidentsByGroup,
    visibleGroups,
    onShowAllGroups,
    onHideAllGroups
}) {
    const { startDate, endDate } = dates,
        { total, visible } = incidentCount,
        hasIncidents = total > 0;

    return (
        <div className={'menu-root'}>
            <div className={'menu-title'}>
                <h1>
                    Boston <br /> Police Incidents
                </h1>
            </div>

            <div className={'menu-content'}>
                <div className={'menu-section'}>
                    <h2 className={'menu-section-title'}>Date Range</h2>
                    <span className={'menu-dates'}>{`${startDate.format(
                        startDate.year === endDate.year ? 'MMM D' : 'MMM D, YYYY'
                    )} – ${endDate.format('MMM D, YYYY')}`}</span>
                    <TimeframePicker timeframe={timeframe} dates={dates} onTimeframeChange={onTimeframeChange} />
                </div>

                {isLoadingIncidents && (
                    <div className={'menu-loader'}>
                        <BarLoader size={50} color={'#98ff98'} loading={true} />
                    </div>
                )}

                {!isLoadingIncidents && !hasIncidents && (
                    <span>Oops. We couldn't find any incidents with location data for this date range</span>
                )}

                {!isLoadingIncidents && hasIncidents && (
                    <>
                        <div className={'menu-section'}>
                            <div>{`Showing ${
                                visible === total ? `all ${total}` : `${visible} out of ${total}`
                            } incidents`}</div>
                        </div>
                        <div className={'menu-section'}>
                            <h2 className={'menu-section-title'}>Incident Groups</h2>
                            <IncidentGroupPicker
                                incidentsByGroup={incidentsByGroup}
                                visibleGroups={visibleGroups}
                                onGroupToggled={onGroupToggled}
                                onShowAllGroups={onShowAllGroups}
                                onHideAllGroups={onHideAllGroups}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className={'menu-footer'}>
                Made with ♥ by{' '}
                <a href='https://www.codeforboston.org/' target='_blank'>
                    Code for Boston
                </a>
            </div>
        </div>
    );
}
