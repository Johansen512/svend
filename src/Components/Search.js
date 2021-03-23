/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SideNavi from "../Components/SideNavi";
import { useEffect, useState} from "react";
import {Link } from "@reach/router";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
// eslint-disable-next-line
const searchResult = getClasses?.filter((getClass) => { if (searchTerm === "") return getClass;
if (getClass?.className.toLowerCase().includes(searchTerm.toLowerCase())) return getClass;
if (getClass?.classDescription.toLowerCase().includes(searchTerm.toLowerCase())) return getClass; 
if (getClass?.classDay.toLowerCase().includes(searchTerm.toLowerCase())) return getClass;
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

const wrapper=css`


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

const formstyle=css`
height:50px;
width:335px;
margin-left:10%;
border:1px solid #D4D4D4;
border-radius:25px;
text-align:center;
`;

const topwrapper=css`
z-index:2000;
padding:0 2em;
padding-left:3em;

`;

const headlineStyle=css`
margin:1em 6em;

`;

const sectionwrapper=css`
overflow-x: scroll;
scroll-behavior: smooth;
scrollbar-width: none;
margin-left:1.5em;


`;

const miniboxwrapper=css`
display:flex;
flex-direction:row-reverse;
align-items:center;
justify-content:space-evenly;
width: 150%;
list-style:none;
padding:0.3em;

`;

const miniboxStyle=css`

margin:0.3em;
height:150px;
width:150px;
position:relative;



img{

width:100%;
Height:100%;
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
bottom:0px;

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
  color:#0A0A0A;
  white-space: nowrap;
  font-size:0.75em;
  font-weight:bold;
}

span{
  margin:0.4em;
  font-size:0.75em;
  color:#000000;
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
<><div css={wrapper}>
  
  <div css={headerstyle}><FontAwesomeIcon icon="arrow-left" /><h2>Search</h2><div css={topwrapper}><SideNavi /></div></div>


        


<form > <input css={formstyle}
    type="search" 
    name="search" 
    id="search" 
    placeholder="Search classes..." 
    ref={register} /></form>

    {/*Slut Search */}


    <h3 css={headlineStyle} >Popular Classes</h3>
        <section css={sectionwrapper}>
    <ul css={miniboxwrapper}>

{searchResult?.length ? searchResult?.map(getClass => (
<>

<li key={getClass.id} css={miniboxStyle} >
<Link to={`../ClassDetails/${getClass.id}`} >
<img  src={getClass?.asset.url} alt="" /> 
<div css={labelstyle}>
<p>{getClass?.className}</p>
<span>
<FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> </span>
</div>
</Link>
</li>

</>

)) : (<p>Your search for classes did not give any results. Try to search for something else</p>)}
</ul></section>


<h3 css={headlineStyle} >Popular trainers</h3>

{trainers?.map(trainer => (
  <div css={trainerinfo}>
<img  src={trainer?.asset.url} alt="" css={trainpicsstyle} /> 
<p>{trainer?.trainerName}</p>



  </div> ))}





<h3>{ searchTerm }</h3>







       
</div> </>
      );
}
 
export default Search;