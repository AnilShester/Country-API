import React from 'react'

function Card(props) {
  return (
    <div className="flex gap-10 items-center h-40 p-5 border-b-2 border-gray-400">
      {props.children}
    </div>
  )
}

export default Card
