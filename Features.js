import React from 'react'
import data from "../data/data.json"

export default function Features(props){
    let information=data.details[props.location.data1.id]
    console.log(information)
   return( 
    
       <div className="row justify-content-center">
           <div className="col-lg-3 m-2">
                <div className="card">
                    <div className="card-body bg-light">
                        <h2 className="text-warning">{information.profile.name}</h2>
                        <h2 className="text-success">{information.profile.price}</h2>
                         <h2 className="text-primary">{information.profile.Ram}</h2>
                    </div>
                </div>
           </div>
           
       </div>
       
    
   );
}