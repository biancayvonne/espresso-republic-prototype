import React from 'react';
import styled from 'styled-components';
import Beans from '../assets/imgs/espresso-beans.png';


const StyledCustomizeBlend = styled.div `
    background: ${props => props.theme.white};
    border-top: 1px solid ${props => props.theme.black};
    width: 50vw;
    height: 30rem;
    margin: 25vh auto;
    font-family: ${props => props.theme.sans2};
    font-size: ${props => props.theme.type_5};
    text-align: center;

`;

const Illustration = styled.div `
    width: 20rem;
    height: 20rem;
    margin: 4rem auto;
    border-radius: 100%;
    background: ${ props => 
         (props.roastLevel == 'Dark') ? '#714B2F' 
        :(props.roastLevel == 'Medium Dark') ? '#9F6E4B'  
        :(props.roastLevel == 'Medium') ? '#C3875B' 
        :'#D6AF7A'};
    transition: all ease-out 500ms;
`;

const StyledSelect = styled.select `
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.sans2};
    font-size: ${props => props.theme.type_4};
    box-sizing: border-box;
    border-radius: 0;
    border: 0;
    padding: 1.3rem 2rem 1rem 2rem;
    line-height: ${props => props.theme.line_4};
    display: inline-block;
    width: 50%;
    margin: 1rem;
    appearance: none;

    :focus {
        outline: none;
    }

`;

const Img = styled.img `
    width:45%;
    height:auto;
    margin: 5.5rem auto;
    paddding-left: 2rem;
`;

const GrindOptions = [
    { label: 'Whole Bean', value: 1},
    { label: 'Percolator', value: 2},
    { label: 'French Press', value: 3},
    { label: 'Chemex', value: 4},
    { label: 'Batch Brew', value: 5},
    { label: 'V60 Dripper', value: 6},
    { label: 'Espresso', value: 7},
    { label: 'Turkish', value: 8}
];

const RoastOptions = [
    { label: 'Dark', value: 1},
    { label: 'Medium Dark', value: 2},
    { label: 'Medium', value: 3},
    { label: 'Light', value: 4},
];

class ProductDetailsB extends React.Component {
    constructor() {
        super();

        this.state = {
            roastLevel: 'Dark'
        }
    }

    handleChange = e => {
        this.setState({
            roastLevel: e.target.value
        });
    }


    render() {
        console.log(this.state.roastLevel);
        return(
            <StyledCustomizeBlend>
                <Illustration roastLevel={this.state.roastLevel} >
                    <Img src={Beans} alt="Beans" />
                </Illustration>
                <StyledSelect>
                    {GrindOptions.map((item, id) => (
                        <option value={item.label} id={item.value}>{item.label}</option> 
                    ))}
                </StyledSelect>
                <StyledSelect onChange={this.handleChange}>
                    {RoastOptions.map((item, id) => (
                        <option value={item.label} id={item.value} >{item.label}</option> 
                    ))}
                </StyledSelect>
            </StyledCustomizeBlend>
        );
    }


}



export default ProductDetailsB;