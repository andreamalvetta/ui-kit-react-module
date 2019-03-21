import React, { Component } from 'react';

import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font-family: 'Helvetica', 'Arial', sans-serif;
  background-color: #67b651;
  color: white;
  padding: 10px;
  width: 150px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  font-size: 15px;
  outline: 0;
  border: 0;

  &:hover {
    background-color: #39a92a;
  }
`;

const Button = props => <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;

export default Button;
