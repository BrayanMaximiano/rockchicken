import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 100px;

`

export const Title = styled.h1`
position: absolute;
top: 92vh;
font-size:60px;
text-decoration: underline; 

@media (max-width:415px){
    top: 83vh;
}

@media (max-width: 320px){
    font-size:2.3rem;
}

`