import React, { createContext, useState} from "react";
import { toast } from "react-toastify";
//import Testicon from "../Components/Testicon";
export const dataContext = createContext();

const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
   


      //Login
   

    
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
    
//check localstorage for Login



const login = (username, password) =>{


    
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
  
   
  
  };
  
  
  
  //Login slut
  
  //Logud begynder
  
  const logout = () => {
    setToken(null)
  sessionStorage.removeItem ("token")
  
  
  
  }

  return ( 

    <dataContext.Provider value={{ data, setData, login, token, logout}}>
    
    {props.children}
    </dataContext.Provider>
    
    
         );
    }
     
    export default DataContextProvider;