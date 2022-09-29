import React from "react";
import { Container, Title } from "./styles";
import CardapioItem from "../CardapioItem";

const index = (props) => {
  return (
    <Container data-aos="fade-right">
      <Title> {props.section} </Title>
      <CardapioItem
        nome="Balde Pequeno"
        desc="6 tiras de peitop de frango, empanadas na hora e fritas, servidas bem crocantes.
        acompanha molho honey mustard levemente apimentado e uma bebida da sua escolha"
        img="https://via.placeholder.com/150"
      />
      <CardapioItem
        nome="Balde Médio"
        desc="10 tiras de peitop de frango, empanadas na hora e fritas, servidas bem crocantes.
        acompanha molho honey mustard levemente apimentado e uma bebida da sua escolha"
        img="https://via.placeholder.com/150"
      />
      <CardapioItem
        nome="Balde Grande"
        desc="20 tiras de peitop de frango, empanadas na hora e fritas, servidas bem crocantes.
        acompanha molho honey mustard levemente apimentado e uma bebida da sua escolha"
        img="https://via.placeholder.com/150"
      />
    </Container>
  );
};

export default index;
