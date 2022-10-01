import styled from "styled-components";

export const Container = styled.footer`
    background-color: #1a1a1a;
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export const Left = styled.div`
 flex: 1;
 height: 100%;

 @media (max-width: 415px){
    display: none;
 }
`
export const Center = styled.div`
flex: 1;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

h1{
    font-size: 2rem;
    font-weight: normal;
}

@media (max-width: 415px){
    h1{
        font-size: 1rem
    }
}
`
export const Right = styled.div`
flex: 1;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const PaymentWrapper = styled.div`
 height: 40px;
 width: 50%;
 overflow: hidden;
 @media (max-width: 415px){
    height: 30px;
    width: 80%;
}

`

export const Payment = styled.img`
    height: 100%;
    width: 100%;
`