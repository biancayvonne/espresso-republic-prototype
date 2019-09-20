import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header `
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.theme.white};
    width: 100vw;


`;


const StyledNav = styled.nav `
    font-size: ${props => props.theme.type_4};
    line-height: ${props => props.theme.line_4};
    float: right;
    right: 0;
    text-align: right;
    width: 90%;

    ul {
        list-style-type: none;

        li {
            display: inline-block;
            margin: ${props => props.theme.med_margin};
        }
    }
`;

function Header() {
    return (
        <StyledHeader>  
                <Logo />
                <StyledNav>
                   <ul>
                        <li><a href="/styleguide">Styleguide</a></li>
                        <li><a href="/product-landing">Product Landing</a></li>
                        <li><a href="/product">Product Detail</a></li>
                        <li><a href="/wholesale">Wholesale</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </StyledNav>
        </StyledHeader>
    );
}

export default Header;