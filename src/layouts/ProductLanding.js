import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero.js';
import ProductCard from '../components/ProductCard';
import { Button, TYPES, SIZES } from '../components/Button';


const ProductLandingHero = styled(Hero)`
    height: 60vh;
    max-height: 600px;
    text-align:center;

`;


const StyledH5 = styled.h5`
    padding-top: 20vh;
    text-align:center;

`;

const StyledH2 = styled.h2`
    padding-top: 1rem;
    text-align:center;

`;


const ProductListing = styled.div`
    width: calc(100% - (${props => props.theme.lg_margin}*2));
    margin: 6rem ${props => props.theme.lg_margin} 2rem ;
    padding-bottom: 6rem;
`;

class ProductLanding extends React.Component {
    constructor() {
        super();
    }

    render() {

        return(
            <>
            <ProductLandingHero align="center" background="#a6d3eb">
                <StyledH5>Coffee</StyledH5>
                <StyledH2>Something about coffee products.</StyledH2>
            </ProductLandingHero>


            <ProductListing>
                <ProductCard productRegion="Columbia" productName="Bureasco" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Gaitania Organic" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Ancuya" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Bureasco" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Gaitania Organic" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Ancuya" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Bureasco" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Gaitania Organic" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Ancuya" productPrice="$13.95" />
            </ProductListing>
            </>
        );
    }
}

export default ProductLanding;