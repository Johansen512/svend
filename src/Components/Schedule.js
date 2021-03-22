import SideNavi from "../Components/SideNavi";
import { dataContext } from "../Contexts/DataContext";
import { useEffect, useContext, useState} from "react";


const Schedule = () => {








    
    const { token } = useContext(dataContext);
    
    const [thatUser, setThatUser] = useState(null);


    useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/1`, {
        "method": "GET",
        "headers": {
         
          "Authorization": `Bearer ${ token }`, }
        
      })
      .then(response => response.json())
      .then (result => setThatUser(result))
      .catch(err => console.error(err));

    


    }, [token, setThatUser, thatUser]);

    
   

    return (   
    <>

    <header><div>IKON</div><h1>My Schedule</h1>
    <SideNavi /></header>
    <h3>{thatUser?.username}</h3>

    {token ?
    <ul>{thatUser?.classes.map(myClass=> (


      

        
            <li>
                <h3>{myClass.className}</h3>
                
                <p>{myClass.classDay}</p>
                
                </li>)
                
                )}
        </ul> : <p>Du har ikke adgang til denne side</p>}</>



)
     
}
 
export default Schedule;