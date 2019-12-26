import React, { useState } from 'react';
import hexToRgba from 'hex-to-rgba';

import './styles.scss';
import { getIncidentGroups } from '../../utils/codeGroups';
import { codeGroupScale } from '../../utils/codeGroups';

export default function IncidentGroupPicker({
    onGroupToggled,
    incidentsByGroup,
    visibleGroups,
    onShowAllGroups,
    onHideAllGroups
}) {
    let groups = getIncidentGroups({ incidentsByGroup });

    return (
        <div className={'incident-group-picker'}>
            <div className={'incident-group-picker-groups'}>
                {groups.map((group, i) => {
                    const { name, count } = group,
                        isVisible = visibleGroups.has(name),
                        color = codeGroupScale(name);
                    return (
                        <label key={`input-group-${i}`} className={`group-checkbox ${isVisible ? '' : 'inactive'}`}>
                            <div
                                className={`input-group__circle`}
                                style={{
                                    backgroundColor: isVisible ? hexToRgba(color, 0.5) : null,
                                    borderColor: isVisible ? hexToRgba(color, 1) : '#d3d3d3'
                                }}
                            />
                            <input type='checkbox' checked={isVisible} onChange={() => onGroupToggled(name)} />
                            <span className={'input-group__name'}>{name}</span>
                            <span className={'input-group__count'}>{count}</span>
                        </label>
                    );
                })}
            </div>
            <div className={'incident-group-controls'}>
                <div className={'incident-group-bulk-actions'}>
                    <div className={'incident-group-bulk-action'} onClick={() => onShowAllGroups()}>
                        <span>Select All</span>
                    </div>
                    <div className={'incident-group-bulk-action'} onClick={() => onHideAllGroups()}>
                        <span>Unselect All</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
