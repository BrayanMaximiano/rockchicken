import React from "react";
import { Container, Title } from "./styles";
import CardapioItem from "../CardapioItem";

const index = (props) => {
  return (
    <Container data-aos="fade-left">
      <Title> {props.section} </Title>
      <CardapioItem
        nome="Molho de bacon"
        desc="Molho cremoso de bacon com sabor irresistivel"
        img="https://via.placeholder.com/150"
      />
      <CardapioItem
        nome="Molho de Alho"
        desc="Molho sabor alho"
        img="https://via.placeholder.com/150"
      />
      <CardapioItem
        nome="Molho especial"
        desc="6 tiras de peitop de frango, empanadas na hora e fritas, servidas bem crocantes.
        acompanha molho honey mustard levemente apimentado e uma bebida da sua escolha"
        img="https://via.placeholder.com/150"
      />
    </Container>
  );
};

export default index;
