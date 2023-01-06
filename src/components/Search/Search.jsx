import { Form,Input,Btn } from "./SearchStyle"
import { FiSearch } from 'react-icons/fi';
import { useState } from "react";

export const Search = ({onSubmit}) => {
const [query,setQuery] = useState('');

const handleQueryChange = e => setQuery(e.target.value.toLowerCase());

const handleSubmit = e =>{
e.preventDefault();
if(query.trim() === ''){
console.error('Am empty field,input something');
}
onSubmit(query);
setQuery('');
}



return(
    <Form onSubmit={handleSubmit}>
    <Input
      type="text"
      name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search films..."
      value={query}
      onChange={handleQueryChange}  
    />
     <Btn type="submit">
      <span ><FiSearch/></span>
    </Btn>
  </Form>
    )
}