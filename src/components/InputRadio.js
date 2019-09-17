import React from 'react';
import styled from 'styled-components';





const Label = styled.label `
    display: block;
    width: ${props => props.width}em;
    height: ${props => props.width}em;
    border-radius: 50%;
    background: ${props => props.theme.black};
    position: absolute;
    left: 2vw;
    top: 13vw;
    transform-origin: 9vw 1vw;
    transform: rotateZ(${props => props.rotate}deg);
    transition: background ease-out 0.2s;
    cursor: pointer;
`;


const Input = styled.input `
    opacity: 0;

    :checked+label {
        display: block;
        background: ${props => props.theme.red};
    }
`;


class InputRadio extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Input type="radio" name="radio-choice" id={this.props.id} value={this.props.value} onChange={this.props.onChange} rotate={this.props.rotate} />
                <Label for={this.props.id} rotate={this.props.rotate} width={this.props.width} > </Label>
            </>
        );
    }

}

export default InputRadio;