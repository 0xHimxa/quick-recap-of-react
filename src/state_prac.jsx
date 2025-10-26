
import Axios from 'axios'
import { useState } from 'react'


export const Excuse_suggestor = () => { 

const [excuse, setExcuse] = useState('')
 const [userInput, setUserInput] = useState('')
 const [validInput, setValidInput] = useState(['party','family','office'])



const getExcuse = async (category)=>{


    try {
        
     const excuseData =  await Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`)
        console.log(excuseData.data[0].excuse);
        setExcuse(excuseData.data[0].excuse)       
    } catch (error) {
        console.log('error fetching excuse:', error);
    }
    
}


const handle_user_input = ()=>{

if(userInput === '')return alert('input field cant be empty')

    if(validInput.includes(userInput.toLowerCase())){
        getExcuse(userInput.toLowerCase())
    }else{
        alert('please enter valid category: party, family, office')
    }
}




    return(
<>
<h1>Excuse Suggestor coming soon...</h1>  

<button onClick={()=>getExcuse('family')}>get family excuse</button>
<button onClick={()=>getExcuse('office')}>get office excuse</button>
<button onClick={()=>getExcuse('party')}>get party excuse</button>

{excuse && <h2>{excuse}</h2>}



<input type="text"  placeholder='enter catiogorie ' onChange={(e)=> setUserInput(e.target.value)}/><button onClick={handle_user_input}>getExcuse</button>


</>


    )
}

