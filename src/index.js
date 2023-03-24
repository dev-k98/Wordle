import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';

import App from './views/App';

const container = createRoot(document.getElementById('root'));
container.render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);
