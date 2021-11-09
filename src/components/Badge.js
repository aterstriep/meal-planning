import * as React from "react"
import styled from "styled-components"

const Span = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #303339;
    color: white;
    border-radius: 4px;
    padding: 2px 6px;
    display: inline;
    margin-right: 4px;
`;

const Badge = ({ children, className }) => {

    return (
        <Span className={className}>
            {children}
        </Span>
    )
}

export default Badge