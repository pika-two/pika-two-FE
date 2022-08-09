
import React from "react";
import Buttons from "../UI/Buttons";
import SmallButtons from "../UI/SmallButtons";

import Titles from "../UI/Titles";

const RegisterInfo = props => {

    const RegisterInfoHandler = (event) => {
        event.preventDefault();
    };

    
    return(
        <div onSubmit = {RegisterInfoHandler}>
            <Titles>기본정보 등록</Titles> <br/><br/><br/>
            <input id = "name" type = "text" value = "이름" /><br/><br/>
            
            <input id = "email" type = "email" value = "직장 이메일"/><br/><br/>
            
            <input id = "date" type = "text" value = "입사년도"/><br/><br/><br/>

            <Buttons>입력완료</Buttons>


            
        </div>
    );
};

export default RegisterInfo;