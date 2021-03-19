/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useContext} from "react";
import {Link } from "@reach/router";
import { dataContext } from "../Contexts/DataContext";
import SideNavi from "../Components/SideNavi";

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

  //Styling for Header

  const headerstyle=css`
  display: flex;
  flex-direction:row;
  margin:0.5em;
  `;

//styling for top
  const topdisplay=css`
  position:relative;
  height:404px;
  width:335px;
  border-radius: 5%;
  margin-left: auto;
  margin-right: auto;

  img{
  width:100%;
  Height:100%;
  object-fit:cover; 
  overflow:hidden;
  border-radius: 5%;
  
  }
`;

  const toptext=css`
  z-index:200;
  position:absolute;
  border-top-right-radius:70%;
  width:70%;
  height:20%;
  left:0px;
  bottom:0px;
  background-color:var(--color-primary);
  `;


   //styling for slide
const wrapper=css`
overflow-x: scroll;
scroll-behavior: smooth;
scrollbar-width: none;

`;


const AllClassesStyle=css`
display:flex;
flex-direction:row;
justify-content:space-evenly;
width: 150%;
list-style:none;

`;

const miniboxStyle=css`
margin: 0.5em;
height:150px;
width:200px;
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
z-index:200;
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


    return  (
<>
       <div css={headerstyle}><h2>Popular Classes</h2> <SideNavi />  </div>
       

        <div css={topdisplay}>
        <img src={topClass?.asset.url} alt="" />
        <button css={toptext} >{topClass?.className} <br/> *****</button>
        </div>

        <div >
          <h3>Classes for you</h3></div>
<div css={wrapper}>
<ul css={AllClassesStyle}>{allClasses?.map((oneClass => (




<li css={miniboxStyle}>
<Link to={`../ClassDetails/${oneClass.id}`}>
<img  src={oneClass?.asset.url} alt="" /> 
<div css={labelstyle}>
<p>{oneClass?.className}</p>
<p>*****</p>
</div>
</Link>
</li>

)



))}

</ul>

</div>   
        </>
      );
}
 
export default Home;