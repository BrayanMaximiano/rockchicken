import styled from "styled-components";


export const Container = styled.div`
    width: 80%;
    border: 2px solid #8e1d00;
    background-color: transparent;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 50px;

    @media (max-width: 412px){
    width: 100%;
    flex-direction: row;
    height: 250px;
    padding: 5px;
  }
`
export const FotoItemWrapper = styled.div`
border-radius: 10px;
margin-right:10px;
height: 150px;
width: 150px;

@media (max-width: 415px){
    display: none;
  }
`
export const FotoItem = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`
export const InfoWrapper = styled.div`
flex: 2;
`
export const ItemName = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`
export const ItemDesc = styled.p`
    color: #8e1d00;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;

    @media (max-width: 415px){
    font-size: 18px;
    text-align: center;
  }
`
