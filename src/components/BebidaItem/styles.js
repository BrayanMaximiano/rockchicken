import styled from "styled-components";

export const Container = styled.div`
    height: fit-content;
    padding: 10px 20px;
    width: 80%;
    border: 2px solid #8e1d00;
    display: flex;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 20px;

    @media (max-width:415px){
        border: none;
        margin-bottom: 10px;

    }
`
export const FotoWrapper = styled.div`
    height: 150px;
    width: 150px;
    margin-right: 50px;
    overflow: hidden;

    @media (max-width:415px){
    display: none;

    }
`

export const Img = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 8px;
`

export const ItemName = styled.h1`
    font-size: 1.5rem;

    @media (max-width:412px){
        font-weight: normal;
    }
`