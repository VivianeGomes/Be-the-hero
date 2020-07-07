import styled from "styled-components";
import { Device } from '../../styles/device';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    margin-left: 18%;
    width: 90%;
    max-width: 1168px;
    box-shadow: 0px 0px 50px #BEBEBE;
    border-radius: 4px;

    

    .containerItems {
        display: flex;
        padding-right: 80px;
        padding-left: 80px;

        
        /* flex-wrap:wrap;
        flex-direction: row;
        max-width: 150px;
        margin: 0 auto; */
    }

    .logoContainer {
        padding-right: 50px;
    }

    .logoImg {
        max-width:200px;
        max-height:150px;
        width: auto;
        height: auto;
        margin-bottom: 25px;

    }

    .catchphrase {
        font-size: 14px;
        line-height: 25px;
        color: #9D9DA3;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .homeLink {
        color:#4D4E53;
        cursor: pointer;
        font-weight: bold;
        font-size:14px;
        text-decoration: none;
        :hover {
            color: #232426;
            text-decoration: none;
        }

        small {
            color: #E02142;
            font-weight: bold;
        }
    }

    .formularyContainer {
        display: flex;
        flex-direction: column;

        div {
            display: flex;
        }

        #city {
            width: 280px;
            margin-right: 10px;
        }

        #uf {
            width: 40px;
        }
    }

    .inputStyle{
        width: 350px;
        height: 43px;
        border:none;
        border-radius: 6px;
        padding-left: 18px;
        margin-bottom: 10px;
    }

    .inputStyle::placeholder {
        font-family: 'Roboto', sans-serif;
    }

    .redButton {
        background: #E02142;
        height: 43px;
        border: none;
        border-radius: 6px;
        margin-top: 15px;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: white;
        width: 367.5px;

        :hover {
            background: #AD1A33;
        }
    }

    @media (max-width:980px) { 
      display: flex;
      flex-direction: column ;
    }

`