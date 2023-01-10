import { Cast,Title,Review } from "./AddInfoStyled"
import { Link } from "react-router-dom"

export const AdditionalInfo = () => {
return(
    <>
    <Title>Additional Info</Title>
    <Cast to="cast"> Cast </Cast>
    <Review to= "review">Review</Review>
    </>
    
    )



}