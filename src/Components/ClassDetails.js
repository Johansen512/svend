/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useContext} from "react";
import SideNavi from "../Components/SideNavi";
//import { navigate} from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




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

//CSS begins

const topwrapper=css`
z-index:2000;
color:white;

 
 `;






const headerstyle=css`
display: flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:row;
  margin:0.5em 0em;
  position:absolute;

h2{
  margin:0.5em 0em;
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
margin-right:5%;
font-size:0.875em;
font-weight:bold;
height:50px;
width:109px;
background-color: rgba(255, 255, 255, 0);
color:var(--color-primary);

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
        <header css={headerstyle}> <FontAwesomeIcon icon="arrow-left" />  <div css={topwrapper}>  <SideNavi />   </div>  </header>
        

        <div css={topdisplay}>

        <img css={picstyle} src={thisClass?.asset.url} alt={thisClass?.className} />
        <h1 css={textstyle}>{thisClass?.className}</h1>
        <div>  <span css={icons}>
<FontAwesomeIcon icon="star"  /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <p>5/5</p></span></div><button css={ratebutton}>RATE</button>  
</div>
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