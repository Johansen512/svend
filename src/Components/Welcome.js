/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Welcome = () => {
    
    const backgroundstyle = css`
    display:block;
    border: solid black 4px;
   
    object-fit:scale-down;
    background-image: url("../img/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    z-index:-200;
    height:300%;
    width:400%;
    position:fixed;
    color:white;
    margin-left:-1500px;
    top:0;



    
    
    `;
    
    
    return ( 
<>
<div css={backgroundstyle}>
<h1>Believe Yourself</h1>
<p>- Train like a Pro</p>
<img src="../img/center.jpg" alt="" />
<button>Start Trainning</button>
</div>

<div></div>


</>
        
     );
}
 
export default Welcome;