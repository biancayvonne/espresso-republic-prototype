import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero.js';
import { Button, TYPES, SIZES } from '../components/Button';

// Placeholder Image Assets
import SamplePackImg from '../assets/imgs/placeholder-sample.png';
import StillLife from '../assets/imgs/placeholder-stilllife.png';
import EspressoMachine from '../assets/imgs/placeholder-machine.png';





const SectionOne = styled(Hero)`
display: flex;
height:90vh;

    div {
        width:40%;
        margin-left: ${props => props.theme.lg_margin};
        margin-top: 20vh;
    }

    img {
        width: 50%;
        height: auto !important;
    }
`;

const SectionTwo = styled(Hero)`
display: flex;
height: 100%;
max-height: 1400px;
border-bottom: 0px;

    div {
        width:40%;
        margin-left: ${props => props.theme.lg_margin};
        margin-top: 20vh;

        h2 {
            padding-top: 50vh;
        }
    }

    img {
        width: 90%;
        height: auto !important;
        margin:auto;
    }
`;

const SectionThree = styled(Hero)`
display: flex;
height: 100%;
max-height: 1400px;

    div {
        width:40%;
        margin-left: ${props => props.theme.lg_margin};
        margin-top: 20vh;
        padding-bottom: 30vh;


        h2 {
            padding-top: 50vh;
        }
    }

    img {
        width: 100%;
        height: auto !important;
    }
`;


class Home extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <>
            <SectionOne align="right" background="#a6d3eb">
                <img src={SamplePackImg} />
                <div>
                    <h2>Lorem ipsum some copy about ordering a sample pack</h2>
                    <Button text="Order Sample Pack" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.DEFAULT} />
                </div>
            </SectionOne>

            <SectionTwo align="left" background="#eae8e1">
                <div>
                    <img src={StillLife} />
                </div>
                <div>
                    <h2>Lorem ipsum some copy about coffee</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ex a urna consequat, commodo ultrices dui interdum. Sed at consequat nunc. </p>
                    <Button text="Shop All Coffee" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.DEFAULT} /><br />
                </div>

                
            </SectionTwo>
            <SectionThree align="right" background="#eae8e1">
                <div>
                    <h2>Lorem ipsum some copy about wholesale</h2>
                    <Button text="Learn More" buttonType={TYPES.SECONDARY}  buttonSize={SIZES.DEFAULT} /><br />
                </div>
                <div>
                    <img src={EspressoMachine} />
                </div>
            </SectionThree>
            </>
        );
    }
}

export default Home;