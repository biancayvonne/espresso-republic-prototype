import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import { Button, TYPES, SIZES } from './Button';
import InputText from './InputText';
import Select from './Select';
import Hero from './Hero';

// Temporary Pages until I can install router
import Home from '../layouts/Home';
import ProductLanding from '../layouts/ProductLanding';
import Product from '../layouts/Product';


const StyleArea = styled.div `
    width: calc(100% - (${props => props.theme.lg_margin}*2));
    margin: 8rem ${props => props.theme.lg_margin} 2rem ;
    padding-bottom: 6rem;
`;

const StyleLabel = styled.h3 `
    margin: 2rem 0;
    border-bottom: 2px solid #000;
    width: 100%;
`;

function App() {
  return (
    <React.Fragment>
        <Header />

        <StyleArea>
            <StyleLabel>Typography</StyleLabel>
            <h1>This is a h1</h1>
            <h2>This is a h2</h2>
            <h3>This is a h3</h3>
            <h4>This is a h4</h4>
            <h5>This is a h5</h5>
            <p>This is some default paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ex a urna consequat, commodo ultrices dui interdum. Sed at consequat nunc. </p>
            <p><a href="#">Default Link Styling</a></p>
            
        </StyleArea>



        <StyleArea>
            <StyleLabel>Buttons</StyleLabel>
            <Button text="Primary Button" buttonType={TYPES.PRIMARY} buttonSize={SIZES.DEFAULT} /><br />
            <Button text="Secondary Button" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.DEFAULT} /><br />
            <Button text="Large Primary Button" buttonType={TYPES.PRIMARY} buttonSize={SIZES.LARGE} /><br />
            <Button text="Large Secondary Button" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.LARGE} />
        </StyleArea>



        <StyleArea>
            <StyleLabel>Forms</StyleLabel>
            <InputText />
            <Select />
        </StyleArea>


        <StyleArea>
            <StyleLabel>Product Card</StyleLabel>
            <div>
                <ProductCard productRegion="Columbia" productName="Bureasco" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Gaitania Organic" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Ancuya" productPrice="$13.95" />
            </div>
        </StyleArea>



        <StyleLabel>Product Description</StyleLabel>
        <Product />


        
        <StyleLabel>Default Hero Sections</StyleLabel>
        <Hero align="left" background="#a6d3eb">
            <h2>Lorem ipsum some copy about ordering a sample pack</h2>
            <Button text="Order Sample Pack" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.DEFAULT} /><br />
        </Hero>
        <Hero align="right" background="#eae8e1">
            <h2>Lorem ipsum some copy about coffee</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ex a urna consequat, commodo ultrices dui interdum. Sed at consequat nunc. </p>
            <Button text="Learn More" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.DEFAULT} /><br />
        </Hero>
        <Hero align="center" background="#eeb5a4">
            <h2>Lorem ipsum copy about wholesale</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ex a urna consequat, commodo ultrices dui interdum. Sed at consequat nunc. </p>
            <Button text="Learn More" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.DEFAULT} /><br />
        </Hero>
   

        <ProductLanding />
        <Home />
        <Footer />
    </React.Fragment>
  );
}

export default App;
