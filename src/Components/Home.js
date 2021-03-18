/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SideBar, SideBarItem } from 'react-burger-sidenav';
import 'react-burger-sidenav/dist/index.css';
import { Link } from "@reach/router";

import { useState, useEffect} from "react";

const Home = () => {

  const linkstyle=css`

  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: flex-end;
  margin: 0.1rem;
  
  
 

  
  `;

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
   

  /*fetch("http://localhost:4000/api/v1/classes/3", {
  "method": "GET"
})
.then(response => console.log(response))
.catch(err => console.error(err));*/


    return  (
<>
       <div><h2>Popular Classes</h2> </div> 
       

        <div><img src={topClass?.asset.url} alt="" /></div>
        <button>{topClass?.className}</button>

        <div>
          <h3>Classes for you</h3></div>

<ul>{allClasses?.map((oneClass => (




<li>
<img  src={oneClass?.asset.url} alt="" /> 
<p>{oneClass?.className}</p>

</li>

)



))}

</ul>

<SideBar bgColor={"red"} iconColor={'yellow'}>
   <Link to="Home" css={linkstyle}> Home</Link>  
<Link to="Search" css={linkstyle}> Search</Link> 
<Link to="Schedule"css={linkstyle} > My Schedule </Link> 
<Link to="" css={linkstyle}> Log ud </Link> 
 
      <SideBarItem></SideBarItem>
    </SideBar>
        
        </>
      );
}
 
export default Home;