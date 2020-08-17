import React from 'react';
import Routes from './routes';

// import Device from './styles/device';
import GlobalStyle from './styles/global';


function App() {
    return (
        <React.Fragment>

            <GlobalStyle grayColor />
            <Routes />
        </React.Fragment>
    )};

export default App;
