/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useContext} from "react";
import SideNavi from "../Components/SideNavi";
//import { navigate} from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import { toast } from "react-toastify";




const ClassDetails = ({id}) => {

  const { token } = useContext(dataContext);
 
//const [loggedUser, setLoggedUser] = useState()
  const [thisClass, setThisClass] = useState ();
  const [thisTrain, setThisTrain] = useState ();
  //const [newCourse, setNewCourse ] = useState ();
  //const [newDay, setNewDay ] = useState ();
 // const { id } = useParams()
 // console.log (id)
 //const [getpic, setGetpic] = useState ();
 //const [cname, setCname] = useState ("")


 
  
//Get class
 

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
  
}, 2500);

})
.catch(err => console.error(err));
  
 
  }


  //Afmeld klasse fetch
const leaveIt = (e) => {
  
  fetch(`http://localhost:4000/api/v1/users/1/classes/${id}`,{
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Bearer ${ token }`, },
     "body": "" })
  .then(response => {
  toast ("Afmelder ...");
  setTimeout (() => {
    
  }, 2500);
  
  })
  .catch(err => console.error(err));}


  //Toast logic

  /*const myToastId = "myToastId";

const notifyLeave = () => {

  
  toast.success(myToastId, {
     toastId: "myToastId",
      render: "Leaving class ...",
      type: toast.TYPE.INFO,
      autoClose: false,})
      
      
     
    
    

  
  
};*/



//Toast logic slut









const headerstyle=css`
display:flex;
flex-direction:row;
justify-content:space-between;
color: white;
position:absolute;
z-index:200;





`;




const picstyle=css`
width:200%;
Height:200%;
object-fit:cover; 
overflow:hidden;
position:relative;
top:0;
bottom:50%;



`;


const textstyle=css`
color: var(--color-primary);
position: absolute;

h1{
  font-size:2.25em;
  font-weight:bold;
}



`;

const trainerstyle=css`
display: flex;
flex-direction: column;
margin:2.5em;


h4{
  padding:0.5em;
}

`;

const trainerinfo= css`
display:flex;
flex-direction:row;
height:92px;
align-items:center;
padding:0.5em;

p{
  padding:0.5em;
  font-weight:bold;
  font-size:1em;
  
}


`;







const trainpicsstyle=css`
width:88px;
height:88px;
object-fit:cover; 
overflow:hidden;
margin: 0.3em;
border-radius:25px;


`;
const buttonstyle=css`
width:100%;
height:50px;
background-color:var(--color-primary);
border-radius:25px;
border-style:none;


`;




    return ( 
<>
        <header css={headerstyle}> <div>IKON</div>     <SideNavi />    </header>
        <h1 css={textstyle}>{thisClass?.className}</h1>

        <img css={picstyle} src={thisClass?.asset.url} alt={thisClass?.className} />

        <div>STARS </div>  <button>Rate</button>

        <p>{thisClass?.classDay}</p>
        <p>{thisClass?.classDescription}</p>

        <section css={trainerstyle}>

        <h4>Trainer</h4>
        <div css={trainerinfo}>
        
         <img css={trainpicsstyle} src={thisTrain?.asset.url} alt="trainer" /> 
         <p>{thisTrain?.trainerName}</p></div>

        { token &&  
        
       ( (!thisClass?.users.find(user => user.username  === "user1")) && 
        
        <div><form onSubmit={justDoIt}>

        <button css={buttonstyle}>Sign Up!</button> 

        </form></div>)}

        { token &&  
      ((thisClass?.users.find(user => user.username  === "user1")) && 
        
       <div><form onSubmit={leaveIt}>
         

       <button css={buttonstyle}>Leave Class</button> 



        </form> </div> )}



        </section>
        </>
      );
}
 
export default ClassDetails;