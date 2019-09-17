import React from 'react';
import styled from 'styled-components';


const StyledHero = styled.div`
    width: 100vw;
    height: 90vh;
    max-height: 780px;
    background: ${props => props.background};
    border-bottom: 2px solid ${props => props.theme.black};
    margin:0;

    &.right {
        h1, h2, h3, h4, h5 {
            text-align: left;
            margin: 0 0 0 50vw;
            width: 38vw;
        }

        p {
            text-align: left;
            margin: -0.5rem 0 0 60vw;
            width: 38vw;
        }

        button {
            margin: 1rem 0 0 50vw;
        }
    }

    &.left {

        h1, h2, h3, h4, h5 {
            text-align: left;
            margin: 0 0 1rem ${props => props.theme.lg_margin};
            width: 38vw;
        }

        p {
            text-align: left;
            margin: 0 0 0 ${props => props.theme.lg_margin};
            width: 38vw;
        }

        button {
            margin: 1rem 0 0 ${props => props.theme.lg_margin};
        }
    }


    &.center {
        h1, h2, h3, h4, h5 {
            text-align: center;
            margin: 0 auto 1rem;
            width: 60vw;

        }

        p {
            text-align: center;
            margin: -0.5rem auto 0;
            width: 60vw;
        }

        button {
            display: block;
            margin: 1rem auto;
        }
    }
`;


function Hero(props) {
    return(
        <StyledHero className={props.align, props.className} background={props.background}>
            {props.children}
        </StyledHero>


    );
}

export default Hero;