import { useState, useEffect} from "react";

const Home = () => {

  const [topClass, setTopClass] = useState (null);



  

   
    useEffect(() => {
    
    fetch("http://localhost:4000/api/v1/classes/4", {
      "method": "GET"
    })
    .then((response) => response.json())
    .then (result => setTopClass(result))
    .catch(err => console.error(err));


      
  }, []);
    
    console.log (topClass)
   

  /*fetch("http://localhost:4000/api/v1/classes/3", {
  "method": "GET"
})
.then(response => console.log(response))
.catch(err => console.error(err));*/


    return  (
<>
       <div><h2>Popular Classes</h2></div> 

        <div><img src={topClass?.asset.url} alt="" /></div>
        <button>{topClass?.className}</button>

        <div>
          <h3>Classes for you</h3>
<p>FEED HERE</p>

        </div>
        </>
      );
}
 
export default Home;