import { getMovieCredits } from "api"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


export const Cast = () => {
const {id} = useParams();
const [cast,setCast] = useState([])
useEffect(()=>{
async function getCast(){
try {
   const result = await  getMovieCredits(id);
   setCast(result);
} catch (error) {
    console.log("Oopps,something went wrong");
}
}
getCast();
},[id]);
const {actors} = cast;
return (
<ul>
    {actors.map(({id,name})=>{
    return(
        <li key={id}>{name}</li>
        )
    
    })}
</ul>
    

    )


}