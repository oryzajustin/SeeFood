import React from 'react';
import { 
  Section,
  Container, 
  HeroBody,
  Title,
  Content,
  Columns, 
  Column, 
  Button
  } from 'bloomer';
import { NavLink } from "react-router-dom";

import QR from './QR';

const First = (props) => {
  return (
    <HeroBody id="hero-spotlight">
      <Container hasTextAlign="centered">
        <Columns>
          <Column id="hero-spotlight-text-background" isSize="narrow">
            <Content hasTextAlign="left">
              <h1><b>-Example Restaurant-</b></h1>
              <h3><b>We cover your food needs!</b></h3>
              <hr/>
              <p>
                Scan the See Food code for visual models of our menu!
              </p>
              <div>
                <QR/>
              </div>
            </Content>
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  );
};

export default First;