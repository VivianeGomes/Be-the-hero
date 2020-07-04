import React from 'react';

import Signin from './pages/Signin';
import GlobalStyle from './styles/global';

function App() {
    return (
        <React.Fragment>
            <GlobalStyle grayColor />
            <Signin />
        </React.Fragment>
    )};

export default App;
