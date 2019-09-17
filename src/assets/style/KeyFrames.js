import {styled, keyframes } from 'styled-components';



export const imageWarpAnimation = (skewNumX, skeyNumY, rotateNum) => keyframes `
    0% {

        transform: scale(1) rotate(0deg) translate(0px,0px) skew(0deg, 0deg);
        opacity: 1;
    }
    100% {
        transform: scale(1.8) rotate(${rotateNum}) translate(21px, -1px) skew(${skewNumX}, ${skeyNumY});
        opacity: 1;
    }
`;