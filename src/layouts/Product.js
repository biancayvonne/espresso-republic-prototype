import React from 'react';
import styled from 'styled-components';
import BeanOptions from '../components/BeanOptions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, TYPES, SIZES } from '../components/Button';
import Select from '../components/Select';
import ProductCard from '../components/ProductCard';
import notesImgs from '../assets/imgs/notes/notesImgs.js';


// Placeholder Image Assets
import ProductHeroImg from '../assets/imgs/placeholder-product-hero.png';
import ProductImg1 from '../assets/imgs/placeholder-product-1.png';
import ProductImg2 from '../assets/imgs/placeholder-product-2.png';
import Fig from '../assets/imgs/notes/fig.png';
import Berries from '../assets/imgs/notes/berries.png';
import Grapefruit from '../assets/imgs/notes/grapefruit.png';


const ProductHero = styled.div`
    background: #EAE8E1 url(${ProductHeroImg});
    background-size: cover;
    width: 100%;
    height: 98vh;
    margin: 0 auto 2rem ;
    text-align: center;
    border-bottom: 2px solid ${props => props.theme.black};

    a, a:link, a:active, a:visited, a:hover {
        font-weight: 700;
    }
`;


const Content = styled.div`
        width: 50%;
        margin: 0 0 0 50%;
        padding-top: 20vh;
`;

const ProductGroup = styled.div`
    display: flex;
    width: calc(100% - (${props => props.theme.lg_margin}*2));
    margin: 8rem ${props => props.theme.lg_margin} 2rem ;
    padding-bottom: 6rem;
`;


const Notes = styled.ul`
    list-style-type: none;
    margin: ${props => props.theme.lg_margin} 0;
    display: flex;

    li {
        display:inline-block;
        margin: 0  ${props => props.theme.s_unit} 0 0;
        padding: 0;
        text-align: center;
    }

    img {
        height: 5rem;
        width: auto;
        vertical-align: middle;
        margin: 0  ${props => props.theme.xs_unit} 0 0;
        padding: 0;
    }
`;

const ProductDescription = styled.div`
    max-width: calc(50% - ${props => props.theme.med_margin});
    margin-right: ${props => props.theme.med_margin};
`;

const ProductSpecs = styled.ul`
    list-style-type: none;

    li {
        border-bottom: 2px solid ${props => props.theme.black};
        padding: ${props => props.theme.xs_unit} 0;
        font-size: ${props => props.theme.type_4};

        span.label {
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            width: 60%;
            display: inline-block;
        }
    }
`;

const PurchaseButton = styled(Button)`
    position: fixed;
    bottom: 0;
    left: calc(50% - 7vw);
    z-index: 10;
`;

const CustomizeButton = styled(Button)`
    width: 70%;
`;

const ProductImages = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 6rem;
    border-top: 1px solid ${props => props.theme.black};

    img {
        width: calc(50% - (${props => props.theme.lg_margin}*2));
        height: auto;
        margin: 4rem ${props => props.theme.lg_margin} 2rem ;
    }
`;

const RelatedProducts = styled.div`
    border-top: 1px solid ${props => props.theme.black};
    width: calc(100% - (${props => props.theme.lg_margin}*2));
    padding: 6rem ${props => props.theme.lg_margin};

    h5 {
        text-align: center;
    }
 
`;

class Product extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <>
            <ProductHero >
                <Content>
                    <h5>Columbia</h5>
                    <h2>Buesaco</h2>
                    <Notes>
                        <li><img src={Berries} />Berries</li>
                        <li><img src={Grapefruit} />Grapefruit</li>
                        <li><img src={Fig} />Figs</li>
                    </Notes>
                    <Select Label="Size"/>
                    <Select Label="Quantity"/>

                    <CustomizeButton text="More Options" buttonType={TYPES.SECONDARY} buttonSize={SIZES.DEFAULT}  />
                    <br />
                    <a href="#">Interested in a subscription?</a>
                </Content>
            </ProductHero>

            <PurchaseButton text="Add to Cart $13.95" buttonType={TYPES.PRIMARY} buttonSize={SIZES.DEFAULT}  />

            <ProductGroup>
                <ProductDescription>
                    <p>Produced by smallholders from Buesaco, Nariño,  this small municipality is 3 hours drive away from Pasto, Nariño.  This regional is composed by 15 producers that grow coffee above 1700 masl.  Only lots scoring 85+ composed this regional.</p>


                    <ProductSpecs>
                        <li><span className="label">Region</span>Narino</li>
                        <li><span className="label">Varietal</span>Caturra, Castillo</li>
                        <li><span className="label">Process</span>Washed</li>
                        <li><span className="label">Elevation</span>1600-2000 m</li>
                    </ProductSpecs>
                </ProductDescription>

                <BeanOptions />
            </ProductGroup>

            <ProductImages>
                <img src={ProductImg1} />
                <img src={ProductImg2} />
            </ProductImages>

            <RelatedProducts>
                <h5>Other products you might like</h5>
                <div>
                <ProductCard productRegion="Columbia" productName="Bureasco" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Gaitania Organic" productPrice="$13.95" />
                <ProductCard productRegion="Columbia" productName="Ancuya" productPrice="$13.95" />
                </div>
            </RelatedProducts>
            </>
        );
    }

}


export default Product;