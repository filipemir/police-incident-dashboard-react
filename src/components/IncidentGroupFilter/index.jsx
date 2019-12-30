import React from 'react';
import hexToRgba from 'hex-to-rgba';

import './styles.scss';
import { codeGroupScale } from '../../utils/codeGroups';
import {
    hideAllIncidentGroups,
    showAllIncidentGroups,
    toggleIncidentGroup,
    getIncidentCountInGroup,
    getSortedIncidentGroups,
    getVisibleIncidentGroups
} from '../../state/incidents';
import FilterGroup from '../FilterGroup';
import { LOCALE } from '../../constants/locale';

export default function IncidentGroupFilter({ incidentsState, dispatchIncidentsAction }) {
    let groups = getSortedIncidentGroups(incidentsState),
        visibleGroups = getVisibleIncidentGroups(incidentsState),
        groupsCount = groups.length.toLocaleString(LOCALE),
        visibleGroupsCount = visibleGroups.size.toLocaleString(LOCALE);

    return (
        <div className={'incident-group-filter'}>
            <FilterGroup
                title={'Incident Groups'}
                summary={
                    visibleGroups.size === groups.length
                        ? `Showing all ${groupsCount} incident groups`
                        : `Showing ${visibleGroupsCount} of ${groupsCount} incident groups`
                }
                onSelectAll={() => dispatchIncidentsAction(showAllIncidentGroups())}
                onUnselectAll={() => dispatchIncidentsAction(hideAllIncidentGroups())}
            >
                {groups.map((group, i) => {
                    const count = getIncidentCountInGroup(incidentsState, { group }).toLocaleString(LOCALE),
                        isVisible = visibleGroups.has(group),
                        color = codeGroupScale(group);

                    return (
                        <div
                            key={`input-group-${i}`}
                            className={`incident-group ${isVisible ? '' : 'inactive'}`}
                            onClick={() => dispatchIncidentsAction(toggleIncidentGroup(group))}
                            onDoubleClick={() => {
                                dispatchIncidentsAction(hideAllIncidentGroups());
                                dispatchIncidentsAction(toggleIncidentGroup(group));
                            }}
                        >
                            <div
                                className={`incident-group__dot`}
                                style={{
                                    backgroundColor: isVisible ? hexToRgba(color, 0.5) : null,
                                    borderColor: isVisible ? hexToRgba(color, 1) : '#d3d3d3'
                                }}
                            />
                            <span className={'incident-group__name'}>{group}</span>
                            <span className={'incident-group__count'}>{count}</span>
                        </div>
                    );
                })}
            </FilterGroup>
        </div>
    );
}
