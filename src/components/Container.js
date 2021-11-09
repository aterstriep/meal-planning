import * as React from "react"
import styled from "styled-components"

const Div = styled.div`
    padding: ${props => props.padding};
`;

const Container = ({ children, className, padding }) => {

    const containerPadding = padding ? padding : "40px";

    return (
        <Div className={className} padding={containerPadding}>
            {children}
        </Div>
    )
}

export default Container