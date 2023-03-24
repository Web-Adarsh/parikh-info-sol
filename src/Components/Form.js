import React from "react";
import { useState } from "react";
export default function Form() {
    const [user,setUser] =useState({
        name:"",
        email:"",
        phone:""
        
    })
    let name,value;
    const changehandler = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({
          ...user,
            [name]:value
        })
    }
  return (
    <>
      <form className="my-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.name}
            onChange={changehandler}
          

          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={changehandler}

          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            phone Number
          </label>
          <input
            type="name"
            name="phone"
            className="form-control"
            id="exampleInputPassword1"
            value={user.phone}
            onChange={changehandler}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
