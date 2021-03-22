/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";
import { useForm } from "react-hook-form";
//import { navigate, Redirect, redirectTo } from "@reach/router";
/*import { toast } from "react-toastify";
import Mytoast from "./Mytoast";*/


const Form = () => {
    
  const { login } = useContext(dataContext);
  

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {console.log (data.username, data.password);

      //data.preventDefault()

      console.log (data)
     // toast.dark("logger ind ...")
      let username = data.username;
      let password = data.password;
      login (username, password);

      
      
  }

  const middleWrapper=css`
  display:flex;
  flex-direction:column;
  align-items:center;
  
  `;

  const formStyle=css`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  `;
 
 const inputstyle=css`
   border-radius:25px;
   width:70%;
   margin:0.5em;
   padding:0.5em;
   font-size:1em;
   background-color:var(--color-secondary);
   border: solid 1px var(--third-color);
   
 
  `;

const submitstyle=css`

  border-radius:25px;
  width:70%;
  margin:0.5em;
  padding:0.5em;
  background-color:var(--color-primary);
  font-weight:bold;
  font-size:0.875em;
  border-style: none;

`;
    

    return  ( 

       

    
    
      <>

      <div css={middleWrapper}>

<h1>Believe Yourself</h1>

<p>---Train like a Pro</p>

<p>Login with your credentials</p>
</div>

      <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
     
        <input css={inputstyle} type='name' name="username" id="username" label="navn" placeholder="Enter your user name..." ref={register({ required: true })} />
        <input css={inputstyle} type='password'  name="password" id="password" placeholder="Enter your password..." ref={register({ required: true })} />
      
        
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input css={submitstyle} type="submit" value="Log in"/>
      </form>
      </>

     ) ;
}
 







export default Form;