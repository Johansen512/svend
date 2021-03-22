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



console.log (trainers?.asset)



const miniboxStyle=css`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
margin:0.3em;
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


    <h3>Popular Classes</h3>
        
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

<h3>Popular Trainers</h3>
<ul>



{searchResult?.length ? searchResult?.map(getClass => (
<>
<li key={getClass.id} css={miniboxStyle}>
  
 
  
  {getClass.trainer.trainerName}{" "}
  {getClass.trainer.id}{" "}
  <img src={trainers?.asset?.url} alt="trainer" /> 
 

</li></>

)) : (<p>Your search for trainers did not give any results. Try to search for something else</p>)}
</ul>






<h3>{ searchTerm }</h3>







       
         </>
      );
}
 
export default Search;