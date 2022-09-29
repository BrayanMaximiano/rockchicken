import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(/bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 414px){
    background-size: 412px 100%;
    height: 80vh;
  }
   
`

export const HomePngWrapper = styled.div`
    height: 390px;
    width: 550px;
    margin-top: 40px;
    overflow: hidden;

    @media (max-width: 414px){
    width: 80%;
    height: 300px;
  }

  @media (max-width: 375px){
    height: 270px;
  }


    
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

    @media (max-width: 414px){
    font-size: 42px;
    width: 300px;

  }

    @media (max-width:375px){
      height: fit-content;
      font-size: 2rem;
  }
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

    @media (max-width: 415px){
    height: 90px;
    width: 80%;
    margin-bottom: 0;
    font-size: 2rem;
  }
`
