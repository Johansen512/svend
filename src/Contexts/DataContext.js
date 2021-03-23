import React, { createContext, useState, useEffect} from "react";
import { toast } from "react-toastify";
export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [allClasses, setAllClasses] = useState (null);



      //Login
   

    
    const [token, setToken]=useState(localStorage.getItem("token"));
    

const myToastId = "myToastId";

const notify = () => {
  if (toast.isActive(myToastId)) {
    toast.update (myToastId, {
      render: "Logger ind ...",
      type: toast.TYPE.INFO,
     

    });
  } else {
    

    toast.success("Logger lige ind", {
      toastId: "myToastId",
      autoClose: false,
      
      
     
    });
   

  }
  
};
    
//check localstorage for Login



const login = (username, password) =>{


    
      console.log (username, password)
      notify ();
      fetch("http://localhost:4000/auth/token", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "body": `username=${username}&password=${password}`
})
      .then((response) => response.json())
      .then ((result) => {
        console.log (result);
        toast.dismiss();
        localStorage.setItem("token", result.token);
      

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
  localStorage.removeItem ("token")
  

  }


  //GET ALL CLASSES
  useEffect(() => {
    
    fetch("http://localhost:4000/api/v1/classes", {
      "method": "GET"
    })
    .then((response) => response.json())
    .then (result => setAllClasses(result))
    .catch(err => console.error(err));
  
  
      
  }, []);
    
    console.log (allClasses)
    

  






  return ( 

    <dataContext.Provider value={{ data, setData, login, token, setToken, logout, allClasses, setAllClasses}}>
    
    {props.children}
    </dataContext.Provider>
    
    
         );
    }
     
    export default DataContextProvider;