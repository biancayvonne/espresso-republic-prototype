import React from 'react';
import styled from 'styled-components';
import InputRadio from './InputRadio';
import Dial from './Dial';




const StyledForm = styled.form `
    position: relative;
    width: 50%;
`;

const GrindLevel = styled.div `
    border-right: 2px solid ${props => props.theme.black};
`;

const RoastLevel = styled.div `
    width: 50%;
`;



const Fieldset = styled.fieldset `

`;


const StyledLabel = styled.legend `
    margin-top:1rem;
`;


class CustomizeBlend extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedOption: 'Whole Bean',
            rotateDial: '215'
        }


        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = e => {
        console.log(e.target);
        let selectedOption = e.target.value;
        let rotateDial = e.target.getAttribute('rotate');
         
        this.setState({ selectedOption, rotateDial});

    };


    render() {
        console.log(this.state);


        return (
                
                   <StyledForm>
                        <Fieldset>

                        <Dial rotate={this.state.rotateDial} />

                        <legend><h5>{this.props.type}</h5></legend>

                            <InputRadio value="Whole Bean" id="whole-bean" onChange={this.handleChange} rotate="205" width="1.7"/>
                            <InputRadio value="Percolator" id="percolator"  onChange={this.handleChange} rotate="172.14"  width="1.55"/>
                            <InputRadio value="French Press" id="french-press"  onChange={this.handleChange}  rotate="139.28"  width="1.45"/>
                            <InputRadio value="Chemex" id="chemex"  onChange={this.handleChange}  rotate="106.42" width="1.4"/>
                            <InputRadio value="Batch Brew" id="batch-brew"  onChange={this.handleChange}  rotate="73.56" width="1.35"/>
                            <InputRadio value="V60 Dripper" id="v60"  onChange={this.handleChange}  rotate="40.7" width="1.22"/>
                            <InputRadio value="Espresso" id="espresso"  onChange={this.handleChange}  rotate="7.84" width="1.15"/>
                            <InputRadio value="Turkish" id="turkish"  onChange={this.handleChange}  rotate="-25" width="1"/>

                            <StyledLabel><h3>{this.state.selectedOption}</h3></StyledLabel>

                        </Fieldset>
                </StyledForm>

        );
    }
}

export default CustomizeBlend;