import React from "react";
import web from  '../src/image/global.jpeg';
import Common from "./Common";

const Home = ()=>{
return(
    <>
      
       <Common  name= " Grow Your Business With " imgsrc={web} visit="/service" btnname="Get Started" />
    </>
)
}
export default Home;