import React from 'react';
import styled from 'styled-components';

export const TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
}

export const SIZES = {
  DEFAULT: 'default',
  LARGE: 'large'
}

const StyledButton = styled.button `
    font-family: ${props => props.theme.sans};
    font-size: ${props => props.theme.type_4};
    line-height: ${props => props.theme.line_4};
    text-align: center;
    border: 0;
    padding: ${props => props.theme.xs_unit} ${props => props.theme.s_unit} 1.2rem;
    font-weight: 700;
    margin: ${props => props.theme.s_unit} 0;
    letter-spacing: 0.02rem;
    display: inline-block;
    transition: all 200ms;
    min-width: 14vw;

    &.primary {
        background: ${props => props.theme.red}
        color: ${props => props.theme.white};

        &:hover {
            background: ${props => props.theme.black};
            color: ${props => props.theme.white};   
        }
    }   

    &.secondary {
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};

        &:hover {
            background: ${props => props.theme.red}
            color: ${props => props.theme.white};
        }
    } 

    &.large {
        font-size: ${props => props.theme.type_3};
        line-height: ${props => props.theme.line_3};
        padding: ${props => props.theme.s_unit} ${props => props.theme.m_unit} 1.4rem;
    } 
`;


export const Button = ({ 
        text, 
        onClick, 
        type, 
        disabled, 
        buttonType,
        buttonSize,
        className 
    }) => (
    <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={
          [ buttonType || TYPES.PRIMARY] + ' '  +
          [ buttonSize || SIZES.MEDIUM]  + ' '  +
          className
        }
    >
        {text}
    </StyledButton>
);
