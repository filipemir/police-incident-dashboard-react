import moment from 'moment';

export function getTimeframeDates({ timeframe, endDate = moment() }) {
    const { value, unit } = timeframe;
    return { startDate: moment(endDate).subtract(value, unit), endDate };
}
