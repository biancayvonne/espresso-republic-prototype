import React from 'react';
import styled from 'styled-components';

const DialCircle = styled.div `
    width: 12vw;
    height: 12vw;
    border: 2px solid ${props => props.theme.black};
    border-radius: 50%;
    position: relative;
    margin: 4rem auto 0;
    transform: rotate(90deg);
    transform: rotateZ(${props => props.rotate}deg);
    transition: all ease-out 0.5s;
`;

const DialLine = styled.div `
    width: 100%;
    height:1px;
    border-top: 2px solid ${props => props.theme.black};
    top: 6vw;
    position: absolute;
    transition: all ease-out 0.5s;
`;

const DialLineIndicator = styled.div `
    width: 15%;
    height:4px;
    border-top: 8px solid ${props => props.theme.black};
    top: 5.8vw;
    
    position: absolute;
    transition: all ease-out 0.5s;
`;

function Dial(props) {
    return(
        <DialCircle  rotate={props.rotate} >
            <DialLine />
            <DialLineIndicator  />
        </DialCircle>
    );
}

export default Dial;