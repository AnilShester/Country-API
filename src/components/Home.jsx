import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../UI/Card'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'
import AppPagination from './AppPagination'

function Home() {
  const {
    data: countries,
    isLoading,
    fetchError: error,
  } = useFetch('https://restcountries.com/v3.1/all')

  const [pageNumber, setPageNumber] = useState(0)
  const countriesPerPage = 5
  const pagesVisited = pageNumber * countriesPerPage
  const pageCount = Math.ceil(countries.length / countriesPerPage)

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayCountries =
    countries &&
    countries
      .slice(pagesVisited, pagesVisited + countriesPerPage)
      .map((country) => (
        <Card key={country.name.common}>
          <Link to={`/country/${country.name.common}`}>
            <img
              src={country.flags ? country.flags.png : country.flags.svg}
              alt={country.flags.alt ? country.flag.alt : 'country flag'}
              className="h-full w-48 hover:scale-110 duration-200 ease-in-out"
            />
          </Link>
          <div className="w-full flex justify-around items-center font-semibold text-slate-500 text-lg">
            <h4 className="w-1/5">
              {country.name.common
                ? country.name.common
                : country.name.official}
            </h4>
            <h4 className="w-1/5 ">
              {country.region ? country.region : 'No region found'}
            </h4>
            <h4 className="hidden sm:w-1/5 sm:flex">{country.population}</h4>
            <div className="w-1/5 h-40 flex-col justify-center overflow-auto hidden sm:w-1/5 sm:flex">
              {(country.languages
                ? Object.values(country.languages)
                : ['']
              ).map((language) => {
                return <li key={language}>{language}</li>
              })}
            </div>
            <Link to={`/country/${country.name.common}`}>
              <span className="h-10 w-10 bg-blue-200 flex justify-center items-center rounded-lg hover:bg-blue-300">
                <ArrowForwardIosIcon />
              </span>
            </Link>
          </div>
        </Card>
      ))

  return (
    <>
      {isLoading && <h1>Loading....</h1>}
      {!isLoading && error && <h1>{error}</h1>}
      {displayCountries}

      <AppPagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </>
  )
}

export default Home
