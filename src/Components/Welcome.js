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
    position:absolute;
    color: white;
    bottom:0;
    margin:0;
        



   `;
    
    
    return ( 
<>
<img css={backgroundstyle} src="../img/background.jpg" alt="" />
<div css={boxstyle}>
<h1>Believe Yourself</h1>
<p>- Train like a Pro</p>
<img css={imagestyle} src="../img/center.jpg" alt="" />
<button>Start Trainning</button>


</div>


</>
        
     );
}
 
export default Welcome;