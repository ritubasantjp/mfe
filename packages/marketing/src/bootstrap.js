import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the main App component

// Mount App to start up the app
const mount = (el) => {
    ReactDOM.render(<App />, el);
};

// If we are in development or isolation, call mount immediately

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root'); // Selecting the root element where
    if (devRoot) {
        mount(devRoot); // If the root element exists, mount the app to it
    }
}
// If we are running through container, we should export mount function wherever container required
export { mount }; // Exporting the mount function so it can be used in other applications or environments
// This allows the app to be used as a microfrontend in a larger application, such as a container application.  