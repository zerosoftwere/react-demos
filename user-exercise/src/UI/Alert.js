import React from "react";
import styled from 'styled-components';
import Button from "./Button";
import Card from "./Card";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: center;
  margin: auto;
  width: 70vh;
  height: 100%;
`;

const Footer = styled.div`
  text-align: right;
  margin-top: 8px;
`

const Alert = ({message, onClose}) => {
  return (
    <Backdrop onClick={onClose}>
      <Content>
        <Card>
          <p>{ message }</p>
          <Footer><Button onClick={onClose}>Okay</Button></Footer>
        </Card>
      </Content>
    </Backdrop>
  )
  ;
}

export default Alert;