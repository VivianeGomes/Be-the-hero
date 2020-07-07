import React, { Component } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo3x.png';

class Register extends Component {
    render() { return(
        <Container>
            <div className='containerItems'>
                <div className='logoContainer'>
                    <img className='logoImg' src={logo} alt='logo Be The Hero'/>
                    <h2 className='title'>Cadastro</h2>
                    <p className='catchphrase'>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
                    <Link to='/' className='homeLink'><small className='leftArrow'>🡐</small> Já possuo cadastro</Link>
                </div>
                <div className='hidden'>
                    <form className='formularyContainer'>
                        <input className='inputStyle' type='text' placeholder='Nome da ONG'/>
                        <input className='inputStyle' type='email' placeholder='E-mail'/>
                        <input className='inputStyle' type='tel' pattern="\(\d\d\)\ \d\d\d\d\d\-\d\d\d\d\" placeholder='WhatsApp'/>
                        <div>
                            <input id='city' className='inputStyle' type='text' placeholder='Cidade'/>
                            <input id='uf' className='inputStyle' type='text' placeholder='UF'/>
                        </div>
                        <button type='submit' className='redButton'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </Container>
    );
}}

export default Register;