import { useState, useEffect} from "react";

const Home = () => {

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
       <div><h2>Popular Classes</h2></div> 

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

        
        </>
      );
}
 
export default Home;