import React from 'react';
import styled from 'styled-components';
import ERLogo from '../assets/imgs/Logo.js';



const StyledLogo = styled.a`
    width: ${props => props.theme.s_unit};
    height: auto;
    max-width: 120px;
    float: left;
    margin: 1rem ${props => props.theme.med_margin} 0;
    display: block;


    &:hover:before {
        visibility: hidden;
        display: none;
    }


    svg {
        width: 100%;
        height: auto;
        fill: ${props => props.theme.black};

        &:hover {
            fill: ${props => props.theme.red};
        }
    }

`;


function Logo() {
    return (
            <StyledLogo href="/" alt="Espresso Republic Home">
                <ERLogo />
            </StyledLogo>
    );
}

export default Logo;