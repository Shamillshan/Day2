import React, { useState } from 'react'

const Mapping = () => {
    var [names,setNames] = useState(["Shamil","Geo","Alan","Thomas"])
  return (
    <div>
        <ul>
            {names.map((value,index)=>{
                return(
                    <li>{value}</li>
            )
            })}

        </ul>
    </div>
  )
}

export default Mapping