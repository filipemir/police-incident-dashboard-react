import React from 'react';
import hexToRgba from 'hex-to-rgba';

import './styles.scss';
import { codeGroupScale } from '../../utils/codeGroups';
import {
    getIncidentCountInGroup,
    getSortedIncidentGroups,
    getVisibleIncidentGroups
} from '../../state/incidents/selectors';
import { hideAllIncidentGroups, showAllIncidentGroups, toggleIncidentGroup } from '../../state/incidents';

export default function IncidentGroupPicker({ incidentsState, dispatchIncidentsAction }) {
    let groups = getSortedIncidentGroups(incidentsState),
        visibleGroups = getVisibleIncidentGroups(incidentsState);

    return (
        <div className={'incident-group-picker'}>
            <div className={'incident-group-picker-groups'}>
                {groups.map((group, i) => {
                    const count = getIncidentCountInGroup(incidentsState, { group }),
                        isVisible = visibleGroups.has(group),
                        color = codeGroupScale(group);
                    return (
                        <label key={`input-group-${i}`} className={`group-checkbox ${isVisible ? '' : 'inactive'}`}>
                            <div
                                className={`input-group__circle`}
                                style={{
                                    backgroundColor: isVisible ? hexToRgba(color, 0.5) : null,
                                    borderColor: isVisible ? hexToRgba(color, 1) : '#d3d3d3'
                                }}
                            />
                            <input
                                type='checkbox'
                                checked={isVisible}
                                onChange={() => dispatchIncidentsAction(toggleIncidentGroup(group))}
                            />
                            <span className={'input-group__name'}>{group}</span>
                            <span className={'input-group__count'}>{count}</span>
                        </label>
                    );
                })}
            </div>
            <div className={'incident-group-controls'}>
                <div className={'incident-group-bulk-actions'}>
                    <div
                        className={'incident-group-bulk-action'}
                        onClick={() => dispatchIncidentsAction(showAllIncidentGroups())}
                    >
                        <span>Select All</span>
                    </div>
                    <div
                        className={'incident-group-bulk-action'}
                        onClick={() => dispatchIncidentsAction(hideAllIncidentGroups())}
                    >
                        <span>Unselect All</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
