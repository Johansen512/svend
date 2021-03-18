
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";
import { useForm } from "react-hook-form";
import { navigate, Redirect, redirectTo } from "@reach/router";
/*import { toast } from "react-toastify";
import Mytoast from "./Mytoast";*/


const Form = () => {


    
    //Login
    //const [userlog, setUserlog]=useState(null);
const [token, setToken]=useState(sessionStorage.getItem("token"));
const myToastId = "myToastId";

const notify = () => {
  if (toast.isActive(myToastId)) {
    toast.update (myToastId, {
      render: "Logger ind ...",
      type: toast.TYPE.INFO,
     

    });
  } else {
    

    toast.info("Logger lige ind", {
      toastId: "myToastId",
      autoClose: false,
     
    });
   // toast(<Testicon />)

  }
  
};
    //const obj = JSON.parse(json);

    //JSON.parse(window.localStorage.getItem('user'));
//check localstorage for Login

const login = (username, password) =>{


  /*if(username && password) {*/
    console.log (username, password)
    notify ();
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${username}&password=${password}`,
    })
    .then((response) => response.json())
    .then ((result) => {
      toast.dismiss();
      sessionStorage.setItem("token", result.token)
      setToken(result.token)})
    
    .catch((err) => {
      console.error(err);
      toast.update(myToastId, {
        render: "Wrong credentials ... try again",
        type: toast.TYPE.ERROR,

      });
    
    
    
    });

  //}
 // let storedloggedUser = JSON.parse(window.localStorage.getItem('Logged'));
//setUserlog(storedloggedUser);
  

//console.log ("from local (login):", userlog );

};



//Login slut


    
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
     <form>
     
        <input type='name' name="username" id="username" label="navn" ref={register({ required: true })} />
        <input type='password'  name="password" id="password" ref={register({ required: true })} />
      
        
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" value="Login"/>
      </form>
      </>

     ) ;
}
 







export default Form;