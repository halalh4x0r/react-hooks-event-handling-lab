import React from "react";

export default function EyesOnMe(){
    function onFocus(){
        console.log("Good!");
    }
    function onBlur(){
        console.log("Hey! Eyes on me!");
    }
    return(
        <>
        <button onFocus={onFocus} onBlur={onBlur} >
            Eyes on me
            </button>
        </>
    )
}
