/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useContext} from "react";
import SideNavi from "../Components/SideNavi";
import { dataContext } from "../Contexts/DataContext";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "@reach/router";




const ClassDetails = ({id}) => {

  const { token } = useContext(dataContext);
 

  const [thisClass, setThisClass] = useState ();
  const [thisTrain, setThisTrain] = useState ();
  //const [thatUser, setThatUser] = useState(null);
 
//Get single user
/*udkommenteret fordi jeg ikke kan nå at lave logikken
til sammenlign user.classes.weekday med thisClass.classday

useEffect(() => {
fetch(`http://localhost:4000/api/v1/users/1`, {
    "method": "GET",
    "headers": {
     
      "Authorization": `Bearer ${ token }`, }
    
  })
  .then(response => response.json())
  .then (result => setThatUser(result))
  .catch(err => console.error(err));




}, [token, setThatUser, thatUser]);*/


 
  
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




//CSS begins

const topwrapper=css`
z-index:2000;
padding:0 0.2em;
left:20em;
position:absolute;
top:48px;
background-color:rgba(255, 255, 255, 0.1);


 
 `;

const iconStyle=css`
position:absolute;
top:50px;
left:1em;
color:white;

z-index:2000;
font-size:2em;
`;




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



//Styling for top

const topdisplay=css`
position:relative;
height:404px;
width:100%;





img{
width:100%;
Height:100%;
object-fit:cover; 
overflow:hidden;
top:0;

}
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
top:230px;
margin-left:1em;

h1{
  font-size:2.25em;
  font-weight:bold;
}

`;

const icons=css`
margin-left:0;
position:absolute;
bottom:50px;
margin-left:2em;
height:11px;
color:var(--color-primary);

p{
  position:absolute;
  margin-left:9em;
  bottom:-12px;
  font-size:0.875em;
font-weight:bold;
}

`;

const ratebutton=css`
position:absolute;
bottom:30px;
border: 2px solid var(--color-primary);
border-radius:25px;
margin-left:20em;
right:5em;
font-size:0.875em;
font-weight:bold;
height:50px;
width:109px;
background-color: rgba(255, 255, 255, 0);
color:var(--color-primary);

`;


const textS=css`
margin:0.1em;
font-size:16px;
padding:0.2em 0;

`;
const classHeadline=css`
font-weight:bold;
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

<header css={headerstyle}><Link to="/Home"><FontAwesomeIcon icon="arrow-left" css={iconStyle} /></Link>
<div css={topwrapper}> <SideNavi /></div></header>
       

         <div css={topdisplay}>

        <img css={picstyle} src={thisClass?.asset.url} alt={thisClass?.className} />
        <h1 css={textstyle}>{thisClass?.className}</h1>
        <div>  <span css={icons}>
<FontAwesomeIcon icon="star"  /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <p>5/5</p></span></div><button css={ratebutton}>RATE</button>  
</div>
        <div css={textS}><p css={classHeadline}>{thisClass?.classDay}</p>
        <p>{thisClass?.classDescription}</p></div>

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