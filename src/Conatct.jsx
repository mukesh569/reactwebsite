import React, { useState } from "react";

const Contact = ()=>{
    const[data,SetData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',

    });
    const inputEvent = (event)=>{
        const {name , value} = event.target;
        SetData((preval) =>{
            return{
                ...preval,
                [name] : value
            }
        })
    }
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}. my phone - ${data.phone}, my email id is ${data.email} and my massage - 
        ${data.msg}`)
    };
return(
    <>
         <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className=" container contact_div">
            <div className=" row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" 
  class="form-control" 
  id="exampleFormControlInput1" 
  name="fullname" 
  value ={data.fullname } 
  onChange={inputEvent} 
  placeholder="Enter your Name"/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
  <input type="number" 
  class="form-control" 
  id="exampleFormControlInput1"
   name="phone" 
   value={data.phone} 
   onChange={inputEvent}
   placeholder="Enter your Contact"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  <input type="email" 
  class="form-control" 
  id="exampleFormControlInput1"
   name="email"
    value={data.email} 
    onChange={inputEvent}
    placeholder="Enter your Email"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea 
  class="form-control"
   id="exampleFormControlTextarea1" 
  rows="3"
  name="msg" 
  value ={data.msg } 
  onChange={inputEvent} >

  </textarea>
</div>
<div class=" col-12">
<button className="btn btn-outline-success" type="submit"> submit Form</button>

</div>
</form>
                </div>
            </div>
        </div>
    </>
)
}
export default Contact;