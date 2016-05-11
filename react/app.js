/**
 * Created by user on 10/05/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/state.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));