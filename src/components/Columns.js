import React from 'react'
import styled from 'styled-components';

const StyledColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    grid-gap: ${props => props.gridGap || "30px"};
`;

const Columns = (props) => {

    const count = props.count ? props.count : props.children.length;

    return (
        <StyledColumns className={props.className} gridGap={props.gridGap} count={count} >
            {props.children}
        </StyledColumns>
    )
}

export default Columns
