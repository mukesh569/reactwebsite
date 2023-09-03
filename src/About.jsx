import React from "react";
import Common from "./Common";
import web from  '../src/image/app.jpeg';

const About = ()=>{
return(
    <>
        <Common  name= " Welcome to About Page " imgsrc={web} visit= "/Contact" btnname= " contact Now" />
    </>
)
}
export default About;