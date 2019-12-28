import React from 'react';

import './styles.scss';
import {
    getIncidentCountInDistrict,
    getSortedDistricts,
    getVisibleDistricts,
    toggleDistrict
} from '../../state/incidents';
import FilterGroup from '../FilterGroup';
import { hideAllDistricts, showAllDistricts } from '../../state/incidents/actions';

export default function DistrictFilter({ incidentsState, dispatchIncidentsAction }) {
    let districts = getSortedDistricts(incidentsState),
        visibleDistricts = getVisibleDistricts(incidentsState);

    return (
        <div className={'district-filter'}>
            <FilterGroup
                onSelectAll={() => dispatchIncidentsAction(showAllDistricts())}
                onUnselectAll={() => dispatchIncidentsAction(hideAllDistricts())}
            >
                {districts.map((district, i) => {
                    const count = getIncidentCountInDistrict(incidentsState, { district }),
                        isVisible = visibleDistricts.has(district);

                    return (
                        <div
                            key={`district-${i}`}
                            className={`district ${isVisible ? '' : 'inactive'}`}
                            onClick={() => dispatchIncidentsAction(toggleDistrict(district))}
                        >
                            <div className={`district__marker`} />
                            <span className={'district__name'}>{district}</span>
                            <span className={'district__count'}>{count}</span>
                        </div>
                    );
                })}
            </FilterGroup>
        </div>
    );
}
