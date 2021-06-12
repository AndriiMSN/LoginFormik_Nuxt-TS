import React from "react";

export const Spinner:React.FC = () =>{
    return(
        <div className="lds-default">
            {Array(12).fill('').map((el, i) => <div key={i}/>)}
        </div>
    )
}