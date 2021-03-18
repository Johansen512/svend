/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SideBar, SideBarItem } from 'react-burger-sidenav'
import 'react-burger-sidenav/dist/index.css'
import { Link } from "@reach/router";





const Navigation = () => {


    const linkstyle=css`

    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-end;
    margin: 0.1rem;
    
    
   

    
    `;

    return (
    
    
    <>
   <SideBar bgColor={"red"} iconColor={'yellow'}>
   <Link to="Home" css={linkstyle}> Home</Link>  
<Link to="Search" css={linkstyle}> Search</Link> 
<Link to="Schedule"css={linkstyle} > My Schedule </Link> 
<Link to="" css={linkstyle}> Log ud </Link> 
 
      <SideBarItem></SideBarItem>
    </SideBar>

      


 
  
    
    </>  );
}
 
export default Navigation;