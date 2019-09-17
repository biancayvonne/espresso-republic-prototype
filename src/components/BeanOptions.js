import React from 'react';
import styled from 'styled-components';
import CustomizeBlend from './CustomizeBlend';


const StyledCustomizeBlend = styled.div `
    width: 50vw;
    height: 30rem;
    margin: 25vh auto;
    display: flex;
    z-index: 0;
    font-family: ${props => props.theme.mono};
    font-size: ${props => props.theme.type_5};
    text-align: center;

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


class BeanOptions extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <StyledCustomizeBlend>
                <CustomizeBlend type="Grind" options={GrindOptions} />
                <CustomizeBlend type="Roast Level" options={RoastOptions} />
            </StyledCustomizeBlend>
        );
    }


}



export default BeanOptions;