/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SideBar, SideBarItem } from 'react-burger-sidenav'
import 'react-burger-sidenav/dist/index.css'
import { Link } from "@reach/router";
import {  useContext} from "react";
import { dataContext } from "../Contexts/DataContext";
import Form from "../Components/Form";




const SideNavi = () => {

  const { token, setToken } = useContext(dataContext);

  const logout = () => {
    setToken(null)
  sessionStorage.removeItem ("token")
  

  }
  



    const linkstyle=css`

    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-end;
    margin: 0.1rem;
    padding:0.5em;

    
    `;

    const sidebarStyle=css`
    
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    
    
    `;

    const logoutStyle=css` 
    border-radius:25px;
  width:70%;
  margin:0 0.5em;
  padding:0.5em;
  background-color:var(--color-primary);
  font-weight:bold;
  font-size:0.875em;
  border-style: none;
    
    
    `;

   


    return (
    
    
    <>
    
   <SideBar bgColor={"white"} iconColor={'black'}  >
     <div css={sidebarStyle}>
   <Link to="/Home" css={linkstyle}> Home</Link>  
      <Link to="/Search" css={linkstyle}> Search</Link> 
  {token && <Link to="/Schedule"css={linkstyle} > My Schedule </Link> }

{token ? <button css={logoutStyle}onClick={logout}>Log ud!</button> : <Form /> }


</div>
      <SideBarItem></SideBarItem>
    </SideBar>

      


    
  
    
    </>  );
}
export default SideNavi;