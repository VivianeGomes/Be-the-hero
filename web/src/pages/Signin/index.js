import React from 'react';
import logo from '../../assets/logo3x.svg';

import { mainContainer } from './styles';

function Signin() {
    return (
        <mainContainer>
            <div className="formulary">
                <img src={logo} alt='logo Be The Hero'/>
            </div>
        </mainContainer>
    );
}

export default Signin;
