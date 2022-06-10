import { useEffect, useState } from "react";



function Stars(props) {
//const [dataApi, setDataApi]=useState();
// useEffect(()=>{
// setDataApi(props)
// },[]);
props.results ==undefined?
     props.results.map((person)=>{
        return (
            <div className="stars">
    
            <p>{person.name}</p>
    
          </div>
        );
       
        }):<p>loading</p>
 
}

export default Stars;
