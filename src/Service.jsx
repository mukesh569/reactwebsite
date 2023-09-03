import React from "react";
import web from "../src/image/global.jpeg";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = ()=>{
return(
    <>
        <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
        <div className=" container-fluid">
            <div className=" row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    {
                        Sdata.map((val, ind)=>{
                        
                            return <Card key={ind} img={val.imgSrc} title={val.title} />

                        },true)

                    }
                        
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Service;