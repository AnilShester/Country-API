import React from 'react'

function DetailCard(props) {
  return (
    <div className="flex justify-center h-full py-10">
      <div className=" flex flex-col gap-20 w-4/5 md:w-2/4 lg:w-2/5">
        {props.children}
      </div>
    </div>
  )
}

export default DetailCard
