/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Welcome = () => {
    
    const backgroundstyle = css`
    position:relative;
    height:100%;
    width:300%;
    Top:0;
    Left:-100%;
    
    
    `;
   
    const imagestyle=css`
    height:100%;
    width:100%;
    
    
    `;

    const boxstyle= css`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    position:absolute;
    color: white;
    bottom:0;
    margin:0;
    right: 0px;
    left : 0px;
    
    
        
h1{

    font-size:4em;
    color:var(--color-primary);
   
} 


   `;

   const wrapper=css`

   height:100vh;
  
   `;
    
    
    return ( 
<>
<div css={wrapper}>
<img css={backgroundstyle} src="../img/background.jpg" alt="girl posing" />
<div css={boxstyle}>
<h1>Believe <br />Yourself</h1>
<p>- Train like a Pro</p>
<img css={imagestyle} src="../img/center.jpg" alt="girl sweating" />
<button>Start Trainning</button>


</div>
</div>

</>
        
     );
}
 
export default Welcome;