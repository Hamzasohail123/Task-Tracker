import React from 'react'

function Button({color, text, onclick}) {

    



  return (
  <><button
  onClick={onclick}
   className='btn'
    style={{backgroundColor:color}}>
    {text}
    </button></>
        )
}

export default Button