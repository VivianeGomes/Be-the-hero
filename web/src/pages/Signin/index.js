import React, { Component } from 'react';
import logo from '../../assets/logo3x.png';
import people from '../../assets/heroes.png';

import { Container, ImgContainer } from './styles';

class Signin extends Component {
    render(){
        return (
            <Container>
                <div className='formularyContainer'>
                    <div>
                        <img className='logoImg' src={logo} alt='logo Be The Hero'/>
                    </div>
                    <h2 className='title'>Faça seu logon</h2>
                    <form className='formComponents'>
                        <input className='inputStyle' type='text' placeholder='Sua ID'/>
                        <button type='submit' className='redButton'>Entrar</button>
                    </form>
                    <a><small className='arrow'>→]</small> Não tenho cadastro</a>
                </div>
                <ImgContainer>
                    <div>
                        <img className='peopleImg' src={people} alt='5 pessoas em grupo de costas com os braços entrelaçados'/>
                    </div>
                </ImgContainer>
            </Container>
            
        );
}}

export default Signin;
