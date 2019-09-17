
import Theme from './Theme.js';

const BaseCSS = `

    *, html, body {
        box-sizing; border-box;
    }

    body {
        background: ${Theme.white};
        color: ${Theme.black};
        font-family: ${Theme.sans};
        font-size: ${Theme.type_4};
        font-weight: 200;
        line-height: ${Theme.line_4};
        overflow: none;
    }

    a, a:link, a:visited, a:active, a:hover {
        color: ${Theme.black};
        text-decoration: none;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            width: 60%;
            height: 2px;
            bottom: -0.6rem;
            left: 20%;
            background-color: ${Theme.black};
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all .15s cubic-bezier(1, 0.25, 0, 0.75) 0s;
            transition: all .15s cubic-bezier(1, 0.25, 0, 0.75) 0s;
        }

        &:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
    }


    h1 {
        font-size: ${Theme.type_1};
        line-height: ${Theme.line_1};
        font-weight: 200;
    }

    h2 {
        font-size: ${Theme.type_2};
        line-height: ${Theme.line_2};
        font-weight: 200;
    }

    h3 {
        font-size: ${Theme.type_3};
        line-height: ${Theme.line_3};
        font-weight: 200;
    }

    h4 {
        font-size: ${Theme.type_4};
        line-height: ${Theme.line_4};
        font-weight: 200;
    }

    h5 {
        font-size: ${Theme.type_5};
        line-height: ${Theme.line_5};
        font-weight: 200;
        text-transform: uppercase;
        letter-spacing: 0.08rem;
        margin-top: 1rem;
    }

    p {
        font-size: ${Theme.type_3};
        line-height: ${Theme.line_3};
        font-weight: 200;
        max-width: 60vw;
        margin: ${Theme.s_unit} 0;
    }
`


export default BaseCSS;