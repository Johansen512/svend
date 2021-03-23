/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useContext} from "react";
import {Link } from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import SideNavi from "../Components/SideNavi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

  const [topClass, setTopClass] = useState (null);
  const { allClasses, setAllClasses } = useContext(dataContext);
  
   


  
//Her fetch til topbillede
   
    useEffect(() => {
    
    fetch("http://localhost:4000/api/v1/classes/4", {
      "method": "GET"
    })
    .then((response) => response.json())
    .then (result => setTopClass(result))
    .catch(err => console.error(err));


      
  }, []);
    
    console.log (topClass)


//Her Fetch til alle hold

useEffect(() => {
    
  fetch("http://localhost:4000/api/v1/classes", {
    "method": "GET"
  })
  .then((response) => response.json())
  .then (result => setAllClasses(result))
  .catch(err => console.error(err));


    
}, [setAllClasses]);
  
  console.log (allClasses)


  //CSS Begins

  const topwrapper=css`
 z-index:2000;
 
 
  
  `;

  //Styling for Header



  const headwrapper=css`


  
  
  `;

  const headerstyle=css`
  display: flex;
 
  align-items:center;
  flex-direction:row;
  margin:0.5em 2.1em;
  left:30%;

h2{
  margin:0.5em;
  
  padding-right:1em;
}



  `;

//styling for top
  const topdisplay=css`
  position:relative;
  height:404px;
  width:380px;
  border-radius: 5%;
  margin-left: 40px;
  margin-right: auto;
 
  

  img{
  width:90%;
  Height:100%;
  object-fit:cover; 
  overflow:hidden;
  border-radius: 5%;
  
  }
`;

  const topbutton=css`
  
  position:absolute;
  border-top-right-radius:50px;
  width:70%;
  height:20%;
  left:0px;
  bottom:0px;
  background-color:var(--color-primary);
  `;

  const toptext=css`


    font-size:1em;
    color:#0A0A0A;
    font-weight:bold;
    margin-left:-60px;
    padding:0;

    `;

    const icons=css`
    margin-left:-100px;
    
    `;

  




  

const middletitle=css`
margin:0.5em 2.5em;


`;
   //styling for slide
const wrapper=css`
overflow-x: scroll;
scroll-behavior: smooth;
scrollbar-width: none;
margin-left:1.5em;


`;


const AllClassesStyle=css`
display:flex;
flex-direction:row;
justify-content:space-evenly;
width: 150%;
list-style:none;
padding:0.3em;

`;



const miniboxStyle=css`
margin:0.3em;
height:150px;
width:300px;
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



    return  (
<div >

<div css={headwrapper}>
       <div css={headerstyle}><h2>Popular Classes</h2><div css={topwrapper}> <SideNavi /></div>  </div>
       
<div>
        <div css={topdisplay}>
        <img src={topClass?.asset.url} alt="" />
        <button css={topbutton} ><p css={toptext}>{topClass?.className}</p> <br/> <span css={icons}><FontAwesomeIcon icon="star" /><FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /></span> </button>
        </div>
        </div>


        <div css={middletitle}>
          <h3>Classes for you</h3></div>
        
<div css={wrapper}>


<ul css={AllClassesStyle}>{allClasses?.map((oneClass => (




<li css={miniboxStyle} >
<Link to={`../ClassDetails/${oneClass.id}`} >
<img  src={oneClass?.asset.url} alt="" /> 
<div css={labelstyle}>
<p>{oneClass?.className}</p><span>
<FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> <FontAwesomeIcon icon="star" /> </span>
</div>
</Link>
</li>

)



))}

</ul>

</div>   
</div>
        </div>
      );
}
 
export default Home;