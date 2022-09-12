import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(https://raw.githubusercontent.com/BrayanMaximiano/rockchicken/master/src/assets/bg.png?token=GHSAT0AAAAAABXZLZ6S27IDDC4HDNR7N5USYY7ORNQ);
    background-position: center;
    background-size:100%;
`

export const HomePngWrapper = styled.div`
    height: 400px;
    width: 550px;
    margin-top: 40px;
`

export const HomePng = styled.img`
    height: 100%;
    width: 100%;



`

export const Title = styled.h1`
    font-size: 64px;
    height: 162px;
    width: 837px;
    text-align: center;
    margin-bottom: 30px;
`

export const Button = styled.button`
    height:120px;
    width:400px;
    border-radius: 30px;
    border: 2px solid #ff7d00;
    background-color: #8e1d00;
    font-size: 48px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: all ease 0.5s;

    :hover{
        background-color: #8e1d11;
    }
`
