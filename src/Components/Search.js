/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SideNavi from "../Components/SideNavi";
import { useEffect, useState, useContext} from "react";
import { dataContext } from "../Contexts/DataContext";
import {Link } from "@reach/router";
import { useForm } from "react-hook-form";

const Search = ( ) => {




  const [getClasses, setGetClasses] = useState (null);
  
 
  //for Search ->

  const {register, watch} = useForm ();
  const searchTerm = watch("search");
  const [trainers, setTrainers]=useState(null)

  useEffect(() => {
      fetch("http://localhost:4000/api/v1/classes")
.then((response) => response.json())
.then(result=> setGetClasses(result))
.catch(err => console.error(err));


  }, []);

 console.log(getClasses)

/*SearchResult */

const searchResult = getClasses?.filter((getClass) => { if (searchTerm === "") return getClass;
if (getClass?.className.toLowerCase().includes(searchTerm.toLowerCase())) return getClass;
if (getClass?.classDescription.toLowerCase().includes(searchTerm.toLowerCase())) return getClass 
if (getClass?.classDay.toLowerCase().includes(searchTerm.toLowerCase())) return getClass
if (getClass?.trainer.trainerName.toLowerCase().includes(searchTerm.toLowerCase())) return getClass;

});

console.log (searchResult)

//SearchResult slut


//Get Trainer ...mugshot 

//Get trainer
useEffect(() => {
  
  
  fetch(`http://localhost:4000/api/v1/trainers/`)
  .then(response => response.json())
.then ((result) => {setTrainers(result); })
.catch(err => console.error(err));


  

}, []);



console.log (trainers)

const headlineStyle=css`
margin:1em;

`;

const miniboxStyle=css`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
margin:1em;
height:150px;
width:150px;
position:relative;
z-index:20;




img{

width:100%;
Height:130%;
object-fit:cover; 
overflow:hidden;
border-radius: 20%;

}

`;

const labelstyle=css`
display:flex;
flex-direction: column;
justify-content: center;

background-color:var(--color-primary);
bottom:-10px;

position:absolute;
border-top-right-radius:20%;
border-bottom-left-radius:20%;
width:100%;


p{
  
  text-overflow: ellipsis;
  margin:0.2em;
  padding-left:0.2em;
  padding-right:0.2em;
  overflow: hidden;
  color:white;
  white-space: nowrap;
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
margin: 1em;
border-radius:25px;


`;








    return (
<>
<SideNavi />


        <h2>Søg her!</h2>


<form> <input 
    type="search" 
    name="search" 
    id="search" 
    placeholder="Search ..." 
    ref={register} /></form>

    {/*Slut Search */}


    <h3 css={headlineStyle} >Popular Classes</h3>
        
    <ul>

{searchResult?.length ? searchResult?.map(getClass => (
<>
<li key={getClass.id} css={miniboxStyle} >
<Link to={`../ClassDetails/${getClass.id}`} >
<img  src={getClass?.asset.url} alt="" /> 
<div css={labelstyle}>
<p>{getClass?.className}</p>
<p>*****</p>
</div>
</Link>
</li></>

)) : (<p>Your search for classes did not give any results. Try to search for something else</p>)}
</ul>


<h3 css={headlineStyle} >Popular trainers</h3>

{trainers?.map(trainer => (
  <div css={trainerinfo}>
<img  src={trainer?.asset.url} alt="" css={trainpicsstyle} /> 
<p>{trainer?.trainerName}</p>



  </div> ))}





<h3>{ searchTerm }</h3>







       
         </>
      );
}
 
export default Search;