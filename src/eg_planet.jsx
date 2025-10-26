 
 export const Planet= ()=>{

const planets_names = [{name: 'mars', isgas: true},{name: 'Earth', isgas: false},
    {name: 'pluto', isgas: true}
]




return(

    <>
    <div>

     {planets_names.map((value)=>{

  return(

    <div>

        {value.isgas && (<><h1>{value.name}</h1></>)}
    </div>
  )

     })}
    </div>
    
    </>
)



 }