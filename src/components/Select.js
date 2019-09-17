import React from 'react';
import styled from 'styled-components';


const StyledSelect = styled.select `
    background: ${props => props.theme.white};
    font-family: ${props => props.theme.sans};
    font-size: ${props => props.theme.type_4};
    line-height: ${props => props.theme.line_4};
    color: ${props => props.theme.black};
    text-align: center;
    border: 2px solid ${props => props.theme.black};
    border-radius: 0px;
    padding: ${props => props.theme.xs_unit};
    margin: ${props => props.theme.xs_unit} 0;
    transition: all 200ms;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:active,
    &:focus {
        color: ${props => props.theme.black};
        background: ${props => props.theme.red};
        outline: none;
    }
`;


function Select() {
    return(
        <StyledSelect>
                <option value="0" className="selected">12 oz</option>
                <option value="1">5 lbs</option>
        </StyledSelect>
    );
}

export default Select;