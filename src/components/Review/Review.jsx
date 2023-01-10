import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieReviews } from "api"


export const Review = () => {
const {id} = useParams()
const[review,setReview] = useState();

useEffect(()=>{
async function getReview(){
try {
    const result = await getMovieReviews(id);
    setReview(result);
} catch (error) {
    
}

}

getReview();
},[id])

return <>
<h1>hello
    
</h1>

</>

}