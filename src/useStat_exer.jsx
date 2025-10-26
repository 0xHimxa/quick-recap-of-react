import { useState } from "react"




export const Practice_useState = ()=>{

const [value_num, setValue_num] = useState(0)




    return(



        <>
        
        <button onClick={()=>{
            setValue_num( prev => prev + 1)
            console.log('clickung')
        }}>increase</button>


        <button onClick={()=>{
            setValue_num( prev => prev - 1)
        }}> decrease</button>


        <button onClick={()=>{
            setValue_num( 0)
        }}>reset</button>

        {value_num}
        
        </>
    )
}