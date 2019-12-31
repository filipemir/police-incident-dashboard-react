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
import { getDistrictName } from '../../utils/districts';
import { LOCALE } from '../../constants/locale';

export default function DistrictFilter({ incidentsState, dispatchIncidentsAction }) {
    let districts = getSortedDistricts(incidentsState).filter(d => !!d),
        visibleDistricts = getVisibleDistricts(incidentsState),
        districtCount = districts.length.toLocaleString(LOCALE),
        visibleDistrictCount = visibleDistricts.size.toLocaleString(LOCALE);

    return (
        <div className={'district-filter'}>
            <FilterGroup
                title={'Districts'}
                summary={
                    visibleDistricts.size === districts.length
                        ? `Showing all ${districtCount} districts`
                        : `Showing ${visibleDistrictCount} of ${districtCount} districts`
                }
                onSelectAll={() => dispatchIncidentsAction(showAllDistricts())}
                onUnselectAll={() => dispatchIncidentsAction(hideAllDistricts())}
            >
                {districts.map((district, i) => {
                    const count = getIncidentCountInDistrict(incidentsState, { district }).toLocaleString(LOCALE),
                        isVisible = visibleDistricts.has(district),
                        districtName = getDistrictName({ districtCode: district });

                    if (!districtName) {
                        return null;
                    }

                    return (
                        <div
                            key={`district-${i}`}
                            className={`district ${isVisible ? '' : 'inactive'}`}
                            onClick={() => dispatchIncidentsAction(toggleDistrict(district))}
                            onDoubleClick={() => {
                                dispatchIncidentsAction(hideAllDistricts());
                                dispatchIncidentsAction(toggleDistrict(district));
                            }}
                        >
                            <div className={`district__marker`} />
                            <span className={'district__name'}>{districtName}</span>
                            <span className={'district__count'}>{count}</span>
                        </div>
                    );
                })}
            </FilterGroup>
        </div>
    );
}
