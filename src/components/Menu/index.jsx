import React, { useState } from 'react';
import { BarLoader } from 'react-spinners';
import { ReactSVG } from 'react-svg';

import arrows from '../../images/arrows.svg';
import controls from '../../images/controls.svg';
import './styles.scss';
import TimeframePicker from '../TimeframePicker';
import IncidentGroupFilter from '../IncidentGroupFilter';
import { getTotalIncidentCount, getVisibleIncidentCount } from '../../state/incidents';
import DistrictFilter from '../DistrictFilter';
import { LOCALE } from '../../constants/locale';

export default function Menu({
    timeframe,
    dates,
    onTimeframeChange,
    isLoadingIncidents,
    incidentsState,
    dispatchIncidentsAction
}) {
    const { startDate, endDate } = dates,
        total = getTotalIncidentCount(incidentsState),
        visible = getVisibleIncidentCount(incidentsState),
        hasIncidents = total > 0,
        [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`menu-root ${collapsed ? 'collapsed' : ''}`}>
            <div className={'menu-title'}>
                {collapsed && <h1>BPI</h1>}
                {!collapsed && (
                    <h1>
                        Boston <br /> Police Incidents
                    </h1>
                )}
            </div>

            {collapsed && (
                <div className={'menu-content menu-controls-icon'} onClick={() => setCollapsed(false)}>
                    <ReactSVG src={controls} />
                </div>
            )}

            {!collapsed && (
                <div className={'menu-content'}>
                    <div className={'menu-section menu-date-section'}>
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
                        <div className={'menu-summary'}>
                            Oops. We couldn't find any incidents with location data for this date range
                        </div>
                    )}

                    {!isLoadingIncidents && hasIncidents && (
                        <>
                            <div className={'menu-section'}>
                                <div className={'menu-summary'}>{`Showing ${
                                    visible === total
                                        ? `${total.toLocaleString(LOCALE)}`
                                        : `${visible.toLocaleString(LOCALE)} of ${total.toLocaleString(LOCALE)}`
                                } incidents`}</div>
                            </div>

                            <div className={'menu-section menu-picker'}>
                                <IncidentGroupFilter
                                    incidentsState={incidentsState}
                                    dispatchIncidentsAction={dispatchIncidentsAction}
                                />
                            </div>

                            <div className={'menu-section menu-picker'}>
                                <DistrictFilter
                                    incidentsState={incidentsState}
                                    dispatchIncidentsAction={dispatchIncidentsAction}
                                />
                            </div>
                        </>
                    )}
                </div>
            )}

            <div className={'menu-footer'}>
                <div className='menu-collapser' onClick={() => setCollapsed(!collapsed)}>
                    <div className='menu-arrows'>
                        <ReactSVG src={arrows} />
                    </div>
                </div>

                {collapsed && (
                    <div className={'menu-attribution'}>
                        <a href='https://www.codeforboston.org/' target='_blank' rel='noopener noreferrer'>
                            C4B
                        </a>
                    </div>
                )}

                {!collapsed && (
                    <div className={'menu-attribution'}>
                        Made with ♥ by{' '}
                        <a href='https://www.codeforboston.org/' target='_blank' rel='noopener noreferrer'>
                            Code for Boston
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
