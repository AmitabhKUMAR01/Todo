import React, { useReducer } from 'react'

const TryReducer = () => {

  const initalvalue= { count: 0 };
  const [state,dispatch] = useReducer(reducer , initalvalue)

  function reducer (state,action)
  {
    switch (action.type){
      case "inc":
        return {...state,count:state.count+1};
      case "dec":
        return {...state,count:state.count-1}
      default :
        return "unrecognized command"
    }
  }
  function handleDEC(){
    dispatch({type:"dec"}) 
  } 
  function handleINC(){

    dispatch({type:"inc"}) 
  }
  let val = 32
  return (
    <div>
      <button onClick={handleINC}>inc</button>
      <button onClick={handleDEC}>dec</button>
    <h1>state{state.count}</h1>
   <ExtraChild val={val}/> 
    </div>
  )
}

function ExtraChild({val}){
  return(
    <div>
      <h1>
        <button onClick={()=>{
          val=val+21
          console.log(val)
        }}>click</button>
      </h1>
    </div>
  )
}

export default TryReducer
