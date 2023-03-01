import React from 'react'
import ReactPaginate from 'react-paginate'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

function AppPagination(props) {
  return (
    <div>
      <ReactPaginate
        previousLabel={
          <span className="bg-gray-200 h-9 w-9 rounded-md flex items-center justify-center hover:bg-gray-400">
            <ArrowBackIosIcon />
          </span>
        }
        nextLabel={
          <span className="bg-gray-200 h-9 w-9 rounded-md flex items-center justify-center hover:bg-gray-400">
            <ArrowForwardIosIcon />
          </span>
        }
        pageCount={props.pageCount}
        breakLabel="..."
        onPageChange={props.handlePageClick}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center my-4 md:gap-3"
        pageClassName="block border border-solid hover:bg-gray-200 py-1 px-3 rounded-md cursor-pointer"
        activeClassName="bg-gray-300"
      />
    </div>
  )
}

export default AppPagination
