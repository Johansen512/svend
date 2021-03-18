/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect} from "react";
import SideNavi from "../Components/SideNavi";

const Home = () => {

  const [topClass, setTopClass] = useState (null);
  const [allClasses, setAllClasses] = useState (null);
  



  
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


    
}, []);
  
  console.log (allClasses)
   

const AllClassesStyle=css`
display:flex;
flex-direction:row;


`;

const miniboxStyle=css`
margin: 1em;
overflow-x: scroll;

img{
  height:200%;
  width:200%;
  
  
  
}



`;


    return  (
<>
       <div><h2>Popular Classes</h2> <SideNavi />  </div>
       

        <div><img src={topClass?.asset.url} alt="" /></div>
        <button>{topClass?.className}</button>

        <div>
          <h3>Classes for you</h3></div>

<ul css={AllClassesStyle}>{allClasses?.map((oneClass => (


<div css={miniboxStyle}>

<li>
<img  src={oneClass?.asset.url} alt="" /> 
<p>{oneClass?.className}</p>

</li></div>

)



))}

</ul>

        
        </>
      );
}
 
export default Home;