import React from 'react';

import './styles.scss';

export default function FilterGroup({ children, onSelectAll, onUnselectAll }) {
    return (
        <div className={'filterer'}>
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
        </div>
    );
}
