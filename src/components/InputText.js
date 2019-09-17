import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input `
    font-family: ${props => props.theme.sans};
    font-size: ${props => props.theme.type_4};
    line-height: ${props => props.theme.line_4};
    color: ${props => props.theme.alt};
    text-align: left;
    border: 2px solid ${props => props.theme.black};
    padding: ${props => props.theme.xs_unit} ${props => props.theme.xs_unit};
    margin: ${props => props.theme.s_unit} ${props => props.theme.xs_unit} ${props => props.theme.s_unit} 0;
    letter-spacing: 0.02rem;
    display: inline-block;
    transition: all 200ms;
    width: 36vw;

    &:active,
    &:focus {
        color: ${props => props.theme.black};
        background: ${props => props.theme.red};
        outline: none;
    }
`;


function InputText(props) {
    return(
        <StyledInput value={props.text} />
    );
}

export default InputText;