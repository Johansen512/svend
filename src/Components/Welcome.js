/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Welcome = () => {
    
    const backgroundstyle = css`
    position:absolute;
    height:100%;
    width:300%;
    Top:0;
    Left:-100%;
    
    
    `;
   
    const imagestyle=css`
    height:100%;
    width:100%;
    border: solid 5px yellow;
    
    `;

    const boxstyle= css`
    display: flex;
    justify-content: center;
    flex-direction:column;
        position:relative;
        color: white;
        margin-bottom:0;
        border: green solid 5px;



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