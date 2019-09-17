import React from 'react';
import styled from 'styled-components';
import productimg from '../assets/imgs/placeholder-product-image.png';

const Card = styled.div `
    text-align:center;
    border: 2px solid #fff;
    width: calc(33.333% - ${props => props.theme.med_margin} - 4px);
    padding-bottom: 1.5rem;
    margin: ${props => props.theme.sm_margin} ${props => props.theme.sm_margin} ${props => props.theme.lg_margin};
    display: inline-block;
    overflow: none;
    transition: all .25s cubic-bezier(1, 0.25, 0, 0.75) 0s;

    &:first-child,
    &:nth-child(3n+1) { 
        margin: ${props => props.theme.med_margin} ${props => props.theme.med_margin} ${props => props.theme.med_margin} 0;
    }

    &:nth-child(3n+0) { 
        margin: ${props => props.theme.med_margin} 0 ${props => props.theme.med_margin} ${props => props.theme.med_margin};
    }

    &:hover {
        border: 2px solid #000;
        cursor: pointer;

    }
`;

const Img = styled.img `
    width: 100%;
    height: auto;
`;


class ProductCard extends React.Component {

    constructor() {
        super();
    }
    

    render() {
        return (
            <Card>
                <Img src={productimg} alt={this.props.productRegion + ' ' + this.props.productName} />
                <h5>{this.props.productRegion}</h5>
                <h3>{this.props.productName}</h3>
                <h4>{this.props.productPrice}</h4>
            </Card>
        );
    }







}

export default ProductCard;