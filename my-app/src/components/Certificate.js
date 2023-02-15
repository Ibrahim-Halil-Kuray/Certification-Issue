import React from 'react'

export default function Certificate(props) {
    
  return (
    <button>
        <a href={props.pdf} download>
            <img src={props.img} style={{height:"80vh"}} />
            Click on the image to download it
            
        </a> 
    </button>
  )
}
