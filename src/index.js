import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'resources/css/style.css';
import 'resources/css/nanumsquareround.css';

import Root from './Root';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
