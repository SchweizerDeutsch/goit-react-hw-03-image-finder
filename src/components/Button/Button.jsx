import React from 'react';
import StyledButton from './Button.styled';

const Button = ({ onClick }) => (
  <StyledButton type="button" className="Button" onClick={onClick}>
    Load more
  </StyledButton>
);

export default Button;
