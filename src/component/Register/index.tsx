// import React from "react";
import { ChangeEvent } from "react";

import "./index.scss";
import { FormInputFunction } from "../../Data/userDateInput";
 export interface IUser {
  username: string;
  password: string;
  email: string;
  address: string;
}
interface IProps{
  // setlogIn: (ele: boolean) => void;
  setislogin:(ele :boolean)=>void
  userdata: IUser;
  setUserdata: (user: IUser) => void;
}


const Register = ({userdata , setUserdata ,setislogin}:IProps ) => {
 //handel
  const onChangehandeler = (e:ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    
    setUserdata({
      ...userdata,
      [name]: value,
    })
  
  }
  //Render
  const inputForm = FormInputFunction.map(
    input => {
   return  <div key={input.id}>
            <label htmlFor={input.name}>{input.name}:</label>
        <input type={input.type} id={input.id} name={input.name} value={userdata[input.name]} onChange={onChangehandeler} />
        </div>
    }
  )
  return (
    <form className="form container" onSubmit={
      (e) => {
        e.preventDefault()
      }
      
    }>
 {inputForm}
      <button type="button" className="btnloginR"  onClick={()=>{setislogin(true)}}>log in</button>
    </form>
  );
};

export default Register;
