import React, {useState} from "react";
import styled from "styled-components";
import Container from "./Container";

const Title = styled.h3`
    margin-top: 0;
`;

export default function Modal({id, className, children, title, setAdded}) {

    const handleClick = () => {
        document.getElementById("meal-plan-modal").style.display = "none";
        if(setAdded) {
            setAdded(false);
        }
    }
    
    return (
        <div id={id} className={`modal-wrapper ${className}`} >
            <div className="modal-overlay" onClick={() => handleClick()}></div>
            <Container className="modal-inner" padding="30px">
                <Title className="modal-title">{title}</Title>
                {children}
            </Container>
        </div>
    )

}