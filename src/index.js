import React from 'react';
import ReactDOM from 'react-dom';
import Map from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Map />, document.getElementById('root'));

serviceWorker.unregister();
