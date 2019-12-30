import isEmpty from 'lodash/isEmpty';
import DISTRICTS from '../constants/districts';

/**
 * @param {object}
 *  @property districtCode {string} - e.g "B2"
 * @returns {string|undefined}
 */
export function getDistrictName({ districtCode }) {
    const districtInfo = getDistrictInfo({ districtCode });

    return districtInfo && districtInfo.name;
}

export function getDistrictInfo({ districtCode }) {
    if (isEmpty(districtCode)) {
        return;
    }

    return DISTRICTS[districtCode.toUpperCase()];
}
