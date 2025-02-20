  import React from "react"
  import {Link} from 'react-router-dom'
  const About=()=> {
    return (
         <div>
            <a href="/h1">hello everyone</a>
            <Link to={"/About"}>hello worlds</Link>
        </div>
       );
    };
export default About