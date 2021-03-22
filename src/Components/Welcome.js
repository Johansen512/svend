/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {Link } from "@reach/router";


const Welcome = () => {

    const wrapper=css`

   height:100vh;
  
   `;

   const top=css`
   
   
   `;
    
    
    const backgroundstyle = css`
    position:relative;
    height:150%;
    width:300%;
    Top:0;
    Left:-100%;
    
    
    
    `;
   
  

    const boxstyle= css`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:left;
    position:absolute;
    color: white;
    top:30%;
    line-height:400%;
    padding-left:20%;
    margin:0;
    right: 0px;
    left : 0px;
    
    
    
        
h1{

    font-size:3.5em;
    color:var(--color-primary);
   
} 

p{
    
    line-height:400%;
    padding:0;
    font-size:1.25em;
    font-weight:bold;
}


   `;

   const bottom=css`
   display:flex;
   `;

const imagestyle=css`
height:375px;
width:100%;
position:relative;
bottom:420px;

    



`;

   const linkStyle=css`
   
       background-color:var(--color-primary);
       width:178px;
       height:50px;
       border-radius:25px;
       bottom:-10%;
       left:40%;
        position:absolute;

        p{
            font-weight:bold;
            font-size:0.875;
            color:black;
            text-align: center;
            padding-top:0.5em;
           
        }


   
`;
   
    
    return ( 
<>
<div css={wrapper}>
    <div css={top}>
<img css={backgroundstyle} src="../img/background.jpg" alt="girl posing" />

<div css={boxstyle}>
<h1>Believe <br />Yourself</h1>

<p>Train like a Pro</p></div>

</div>
<div css={bottom}>
<img css={imagestyle} src="../img/center.jpg" alt="girl sweating" />

<Link to="Home" css={linkStyle}><p>Start Trainning</p></Link> 

</div>
</div>

</>
        
     );
}
 
export default Welcome;