/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useContext} from "react";
import SideNavi from "../Components/SideNavi";
//import { navigate} from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import { toast } from "react-toastify";



const ClassDetails = ({id}) => {

  const { token } = useContext(dataContext);
  const { getId } = useContext(dataContext);

  const [thisClass, setThisClass] = useState ();
  const [thisTrain, setThisTrain] = useState ();
  //const [newCourse, setNewCourse ] = useState ();
  //const [newDay, setNewDay ] = useState ();
 // const { id } = useParams()
 // console.log (id)
 //const [getpic, setGetpic] = useState ();
 //const [cname, setCname] = useState ("")


 
  
//Get class
 getId && console.log (getId)

  useEffect(() => {
    

  fetch(`http://localhost:4000/api/v1/classes/${id}`)
  .then(response => response.json())
.then ((result) => {setThisClass(result); })
.catch(err => console.error(err));
  

}, [id]);



//Get trainer
useEffect(() => {
  
  thisClass && 
  fetch(`http://localhost:4000/api/v1/trainers/${thisClass?.trainer.id}`)
  .then(response => response.json())
.then ((result) => {setThisTrain(result); })
.catch(err => console.error(err));
  

}, [thisClass]);

//Tilmeld fetch
const justDoIt = (e) => {

  fetch(`http://localhost:4000/api/v1/users/1/classes/${id}`,{
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Bearer ${ token }`, },
   "body": "" })
.then(response => {
toast ("Tilmelder ...");
setTimeout (() => {
  //navigate ("./Schedule")
}, 2500);

})
.catch(err => console.error(err));
  
 
  }




const trainpicsstyle=css`
width:100%;
height:100%;

`;






    return ( 
<>
        <header> <div>IKON</div>     <SideNavi />    </header>
        <h1>{thisClass?.className}</h1>

        <img css={trainpicsstyle} src={thisClass?.asset.url} alt={thisClass?.className} />

        <div>STARS </div>  <button>Rate</button>

        <p>{thisClass?.classDay}</p>
        <p>{thisClass?.classDescription}</p>

        <h4>Trainer:</h4>
        <p>{thisTrain?.trainerName}</p>
         <img css={trainpicsstyle} src={thisTrain?.asset.url} alt="trainer" /> 
         <form onSubmit={justDoIt}>
         


        <button >Sign Up</button>
        
        </form>
        </>
      );
}
 
export default ClassDetails;