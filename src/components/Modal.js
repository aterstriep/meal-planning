import React, {useState} from "react";
import styled from "styled-components";
import Container from "./Container";

const Title = styled.h3`
    margin-top: 0;
`;

export default function Modal(props) {

    const handleClick = () => {
        document.getElementById("meal-plan-modal").style.display = "none";
    }
    
    return (
        <div id={props.id} className={`modal-wrapper ${props.className}`} >
            <div className="modal-overlay" onClick={() => handleClick()}></div>
            <Container className="modal-inner" padding="30px">
                <Title className="modal-title">{props.title}</Title>
                {props.children}
            </Container>
        </div>
    )

}