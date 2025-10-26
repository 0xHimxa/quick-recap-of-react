
import { useState } from "react"

export const Practice_State = ()=>{

const [age,set_Age] =useState(0)

const increase_age = ()=>{

  
    set_Age(age + 1)
}



const [input_value,setInput_vale] = useState('')
const handleInputChange = (event)=>{
 const enterd_value = event.target.value
    console.log(event.target.value)

    setInput_vale(enterd_value)


}


const [text_color, setText_color] = useState('green')




return(

<>
<h1>{age}</h1>
<h3 style={{color: text_color}}>coler toglle</h3>

<button onClick={()=>{
    setText_color(text_color == 'blue'? 'red' : 'blue')
}}> change</button>
<button onClick={increase_age}>Increase age</button>

<input type="text"  onChange={handleInputChange}/>

{input_value}

</>


)


}