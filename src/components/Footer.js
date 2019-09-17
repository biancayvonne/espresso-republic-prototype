import React from 'react';
import styled from 'styled-components';
import InputText from './InputText';
import { Button, TYPES, SIZES } from './Button';


const StyledFooter = styled.footer `
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.type_4};
    line-height: ${props => props.theme.line_4};
    width: calc(100vw - ${props => props.theme.lg_margin} * 2);
    padding: ${props => props.theme.lg_margin};

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    a, a:link, a:visited, a:active {
        color: ${props => props.theme.white};
    }

    a:hover {
        color: ${props => props.theme.alt};
    }

    div.newsletter {
        margin-bottom: calc(${props => props.theme.lg_margin} * 2);
    }

    p {
        margin: 0; 
        width: 50vw;
        font-size: ${props => props.theme.type_4};
        line-height: ${props => props.theme.line_4};
    }

    div.copyright p {
        color: ${props => props.theme.alt};
        width: 30%;
        float:left;
        padding-bottom: calc(${props => props.theme.lg_margin} * 2);
    }

    div.footerNav { 
        width: 54%;
        float:right;
        display: flex;

        ul {
            width: 33%;
        }
    }

`;




function Footer() {
    return(

        <StyledFooter>
            <div className="newsletter">
                <h3>Newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ex a urna consequat, commodo ultrices dui interdum. Sed at consequat nunc. </p>
                <InputText text="Enter your email address" />
                <Button text="Sign up" buttonType={TYPES.PRIMARY} buttonSize={SIZES.DEFAULT} />
            </div>

            <div className="copyright">
                <p>© 2019 Espresso Republic. All rights reserved. Terms of Use. Privacy Policy.</p>
            </div>

            <div className="footerNav">
                <ul>
                    <li><a href="/">Coffee</a></li>
                    <li><a href="/">Tea</a></li>
                    <li><a href="/">Equipment</a></li>
                    <li><a href="/">Merchandise</a></li>
                </ul>
                <ul>
                    <li><a href="/">Our Story</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Brewing Guide</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Tours</a></li>
                </ul>
                <ul>
                    <li><a href="/">Wholesale</a></li>
                    <li><a href="/">Roasting Services</a></li>
                </ul>
            </div>
        </StyledFooter>


    );
}


export default Footer;