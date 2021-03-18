
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
    

    return  ( 

       

    
    
      <>
      <form  onSubmit={handleSubmit(onSubmit)}>
     
        <input type='name' name="username" id="username" label="navn" ref={register({ required: true })} />
        <input type='password'  name="password" id="password" ref={register({ required: true })} />
      
        
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" value="Login"/>
      </form>
      </>

     ) ;
}
 







export default Form;