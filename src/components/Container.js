import * as React from "react"
import styled from "styled-components"

const Div = styled.div`
    padding: ${props => props.padding};
`;

const Container = ({ children, className, padding }) => {

    return (
        <Div className={`container ${className || ""}`} padding={padding || "40px"}>
            {children}
        </Div>
    )
}

export default Container