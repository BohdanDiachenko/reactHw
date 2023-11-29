import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About:React.FC = () => {

    const [isAuth, setIsAuth] = useState(false)

    if(!isAuth){
        return <Navigate to={"/"}/>
    }

    return (<div>
        About
    </div>)
};
export default About;