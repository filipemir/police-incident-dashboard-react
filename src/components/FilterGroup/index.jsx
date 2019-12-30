import React, { useState } from 'react';

import './styles.scss';
import { ReactSVG } from 'react-svg';
import arrows from '../../images/arrows.svg';

export default function FilterGroup({ title, children, onSelectAll, onUnselectAll }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`filterer ${expanded ? 'filterer__expanded' : ''}`}>
            <div className={'filterer-header'} onClick={() => setExpanded(!expanded)}>
                <span>{title}</span>
                <div className={`filterer-header-arrows ${expanded ? 'filterer-header-arrows__point-up' : ''}`}>
                    <ReactSVG src={arrows} />
                </div>
            </div>
            {expanded && (
                <>
                    <div className={'filterer-items'}>{children}</div>
                    <div className={'filterer-controls'}>
                        <div className={'filterer-bulk-actions'}>
                            <div className={'filterer-bulk-action'} onClick={onSelectAll}>
                                <span>Select All</span>
                            </div>
                            <div className={'filterer-bulk-action'} onClick={onUnselectAll}>
                                <span>Unselect All</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
