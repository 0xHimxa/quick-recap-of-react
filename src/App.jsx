

//to import css just put the part name
import './App.css'
import { useState } from 'react'
import { Planet } from './eg_planet'
import { Practice_State } from './state'
import { Practice_useState } from './useStat_exer'
import Effect_preview from './effect'
import { Excuse_suggestor } from './state_prac'
import { Todo_List } from './todo'

//prop: an object to pass aguement to componet
const WorkersInfo = (info)=>{

  
  return (<>


<div>

  name: {info.name} 
  role: {info.position}
  salary: {info.salary}
  company: ${info.company}
</div>

  </>
    
  
  
  )
}



const Condi_Render = ()=>{

 // to conditional render element base on condition
 // first way
//   const age = 18



//   if( age >= 18){

//     return <h1> You can work</h1>
//   }

// else{

//   return <h1> you cant work</h1>
// }






}










function App() {
  const [count, setCount] = useState(0)
  const name = 'himxa xai '
  const age = 19
  const text_bool = true;


// we use map to loop true array or object and create UI for them

  const user_names = [{name: 'himxa', age: 12},{name:'perdron', age: 18},{name:'nabil', age: 19}] 

//   return (
//     <div>
//    {/* //how to add prop value */}
//    <WorkersInfo name='himxa' salary={15000}  position='senior dev' company ='Asipita'/>
//     <WorkersInfo name='nabil' salary={150}  position='jenour' company ='Asipita'/>
//     <WorkersInfo name='john' salary={20000}  position='junior dev' company ='Asipita'/>
//     <WorkersInfo name='doe' salary={25000}  position='lead dev' company ='Asipita'/>  




  
//     <Condi_Render/>


//     {/* second way to condition rendr */}
   
//    {/* check beolw to condi
//    tional render css
//     */}


//       {age >= 18 ? <h1 style={{color: text_bool? "red" : "green"}}> you can drive</h1>: <h1>you cant drinv</h1>}


// {/* third way to conditional render element */}
//  {/* this one will on wokr if the bool is true */}

// {text_bool && <button>yap showing me  </button>}




// {/* // we use map to loop true array or object and create UI for them */}


// {user_names.map((value)=>{

//   return (<><h1>{value.name}</h1>


//     <h2>{value.age}</h2></>
//   )
// })}








// {/* planet render 


// <Planet/> */}









// <Practice_State/>


// <Practice_useState/>






// <Effect_preview/>
//     </div>
//   )


return(


  <>

  {/* <Excuse_suggestor/>  */}




  <Todo_List/>
  </>
)
}

export default App
