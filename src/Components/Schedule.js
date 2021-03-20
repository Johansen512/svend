import SideNavi from "../Components/SideNavi";
import { dataContext } from "../Contexts/DataContext";
import { useEffect, useContext, useState} from "react";


const Schedule = () => {
    
    const { token } = useContext(dataContext);
    const { getId } = useContext(dataContext);
    const [fnyf, setFnyf] = useState(null);


    useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/1`, {
        "method": "GET",
        "headers": {
         
          "Authorization": `Bearer ${ token }`, }
        
      })
      .then(response => response.json())
      .then (result => setFnyf(result))
      .catch(err => console.error(err));

    


    }, [token, getId, setFnyf, fnyf]);

    fnyf && console.log (fnyf)

    return (   
    <>

    <header><div>IKON</div><h1>My Schedule</h1>
    <SideNavi /></header>
    <h3>{fnyf?.username}</h3>
    <ul>{fnyf?.classes.map(myClass=> (


      

        
            <li>
                <h3>{myClass.className}</h3>
                
                <p>{myClass.classDay}</p>
                
                </li>)
                
                )}
        </ul></>



)
     
}
 
export default Schedule;