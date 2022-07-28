import React from "react"
import { Container, Row } from "reactstrap"
import ProductCard from "../productCard/ProductCard"
import styled from "styled-components"

//import { items } from "../../data";
import useCatalog from "../../hooks/useCatalog";

export default function Products() {
  const Heading = styled.h3`
    font-size: 20px;
    color: #171717;
    margin-right: 22px;
    position: relative;
    cursor: pointer;
    padding-bottom: 20px;
    padding-left: 20px;
    &:before {
      opacity: 1;
      position: absolute;
      left: 0;
      bottom: -3px;
      width: auto;
      height: 2px;
      background: #171717;
      content: "";
    }
  `

  console.log("calling dentro do component");

  var response = useCatalog();

  console.log(response);

  var items = [];

  //Object.keys(response).forEach(key => items.push({name: key, value: response[key]}))
  for(var i in response)
    items.push([i, response [i]]);
  
  console.log(items);

  return (
    <Container style={{ marginTop: "40px" }}>
      <Heading>Your Choices</Heading>
      <Row>
        {items.map(item => (
          <ProductCard
            key={item.id}
            product={item}
            lg="3"
            md="4"
            sm="6"
            xs="6"
          />
        ))}
      </Row>
    </Container>
  )
}
