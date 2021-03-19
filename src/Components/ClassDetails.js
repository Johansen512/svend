

import { useState, useEffect} from "react";
import SideNavi from "../Components/SideNavi";



const ClassDetails = ({id}) => {

  const [thisClass, setThisClass] = useState ();
 // const { id } = useParams()
 // console.log (id)

 
 
  

  

  useEffect(() => {
    

  fetch(`http://localhost:4000/api/v1/classes/${id}`)
  .then(response => response.json())
.then ((result) => {setThisClass(result); })
.catch(err => console.error(err));
  
}, [id]);

thisClass && console.log (thisClass)

    return ( 
<>
        <header> <div>IKON</div>     <SideNavi />    </header>
        <h1>{thisClass?.className}</h1>

        <img src={thisClass?.asset.url} alt={thisClass?.className} />

        <div>STARS </div>  <button>Rate</button>

        <p>{thisClass?.classDay}</p>
        <p>{thisClass?.classDescription}</p>

        <h4>Trainer:</h4>
         <img src="" alt="" /> 
         <p>{thisClass?.trainer.trainerName}</p>

        <button>Sign Up</button>
        </>
      );
}
 
export default ClassDetails;