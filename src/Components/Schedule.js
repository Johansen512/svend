/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SideNavi from "../Components/SideNavi";
import { dataContext } from "../Contexts/DataContext";
import {Link } from "@reach/router";
import { useEffect, useContext, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

    
const headerstyle=css`

display: flex;
 justify-content:space-evenly;
 align-items:center;
 flex-direction:row;
 margin:0.5em 2.1em;
 left:10%;

h2{

padding:0 2em;


}

`;

const liststyle=css`
display:flex;
flex-direction:column;
border: solid 1px #D4D4D4;
background-color:#FCFBFB;
margin:1em;
width:70%;
border-radius:20px;
height:100px;

h3, p {
  padding:0.5em;
  margin:0 0.5em;
  
}

`;

   

    return (   
    <>

    <header css={headerstyle}><Link to="/Home"><FontAwesomeIcon icon="arrow-left" /></Link><h1>My Schedule</h1>
    <SideNavi /></header>
    <h3>{thatUser?.username}</h3>

    {token ?
    <ul>{thatUser?.classes.map(myClass=> (


      

        
            <li css={liststyle}>
              <Link to={`../ClassDetails/${myClass.id}`} >
                <h3>{myClass.className}</h3>
                
                <p>{myClass.classDay}</p>
                </Link>
                </li>)
                
                )}
        </ul> : <p>Du har ikke adgang til denne side</p>}</>



)
     
}
 
export default Schedule;