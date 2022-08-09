
import React from "react";
import Titles from "../assets/Titles";

import styled from "styled-components";

const RegisterInfo = props => {

    const RegisterInfoHandler = (event) => {
        event.preventDefault();
    };

    
    return(
        <Div>
            
            <h2>기본정보 등록</h2>
        </Div>
    );
};

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    margin: 10% auto;
    
`;

export default RegisterInfo;