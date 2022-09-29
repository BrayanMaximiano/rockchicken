import styled from "styled-components";

export const Container = styled.div`
    background-color: #00B2A9;
    padding: 20px;
    width: 80%;
    border-radius: 20px;
    border: 2px solid #8e1d00;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    @media (max-width:415px){
        width: 97%;

    }
`
export const Title = styled.h1`
    text-decoration: underline;
    margin-bottom: 20px;
`