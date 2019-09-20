import React from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';


const StyledSelect = styled(ReactSelect)`
    &.react-select-container {
        width: calc(42% - (${props => props.theme.xs_unit}*2));
        border: 0px;
        display:inline-block;
        margin: 0 ${props => props.theme.xs_unit} 0 auto ;

    }
    
    .react-select__control {
        border: 2px solid ${props => props.theme.white};
        border-radius: 0;
        text-align: center;
        font-size: ${props => props.theme.type_3};
        line-height: ${props => props.theme.line_3};
        padding: 1rem;
        margin: 0;

        &.react-select__control--is-focused {
            border: 2px solid ${props => props.theme.black};
            box-shadow: 0 0 0 0;
        }
    }

    .react-select__value-container {
        padding: 0;
        text-align: center;
    }

    .react-select__menu {
        border: 0px;
        border-radius: 0;
        font-size: ${props => props.theme.type_3};
        line-height: ${props => props.theme.line_3};
        width: 100%;
    }

    .react-select__menu-list {
        border: 0px;
        border-radius: 0;
        box-shadow: 0 0 0 0;
    }

    .react-select__indicator-separator {
        display: none;
    }

    .react-select__option{
        background: transparent;
        color: ${props => props.theme.black};
    }

    .react-select__option--is-focused {
        background: transparent;
        color: ${props => props.theme.black};
    }

    .react-select__option--is-selected {
        background: transparent;
        color: ${props => props.theme.red};
    }

`;

const SelectH5 = styled.h5`
    display: inline-block;
    text-align: left;
`;

const options = [
    { value: '12oz', label: '12 oz' },
    { value: '5lb', label: '5 lb' }
];




function Select(props) {
    return(
        <>
        <SelectH5>{props.Label}</SelectH5>
        <StyledSelect classNamePrefix="react-select" className="react-select-container" options={options} defaultValue={options[0]} />
        </>
    );
}

export default Select;

