import styled from "styled-components";

export const Container = styled.div`
    height: 751.6px;
    display: flex;
    align-items: center;
    justify-content: center;

    .logoImg {
        max-width:200px;
        max-height:150px;
        width: auto;
        height: auto;
        margin-bottom: 75px;
    }

    

    .formularyContainer {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        margin-top: 50px;
        .title {
            font-family: 'Roboto', sans-serif;
            margin-bottom: 25px;
        }
    }

    .formComponents {
        display: flex;
        flex-direction: column;
    }

    .inputStyle{
        width: 270px;
        height: 43px;
        border:none;
        border-radius: 6px;
        padding-left: 18px;
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
    }

    .arrow {
        color: #E02142;
        font-weight: bolder;
    }
`;

export const ImgContainer = styled.div`
    .peopleImg {
        max-width:1000px;
        max-height:450px;
        width: auto;
        height: auto;
        margin-left: 150px;

    }
`;