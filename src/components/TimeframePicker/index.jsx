import React from 'react';
import Select from 'react-select';
import isEqual from 'lodash/isEqual';

import './styles.scss';
import { TIMEFRAMES } from '../../constants/timeframes';

const options = TIMEFRAMES.map(t => {
    return { value: t, label: `${t.value} ${t.unit}` };
});

export default function TimeframePicker({ timeframe, onTimeframeChange }) {
    const timeframeIndex = TIMEFRAMES.findIndex(t => isEqual(t, timeframe));

    return (
        <div className={'timeframe-picker'}>
            <Select
                className={'timeframe-picker__selector'}
                classNamePrefix={'react-select'}
                value={options[timeframeIndex]}
                onChange={t => onTimeframeChange(t.value)}
                options={options}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary: '#fefffe',
                        primary75: '#1086ff',
                        primary25: '#1086ff',
                        neutral0: '#33323c'
                    },
                    spacing: {
                        ...theme.spacing,
                        menuGutter: 0,
                        controlHeight: 30
                    }
                })}
            />
        </div>
    );
}
