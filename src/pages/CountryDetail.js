import React from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import DetailCard from '../UI/DetailCard'
import TextSpan from '../UI/TextSpan'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import PlaceIcon from '@mui/icons-material/Place'
import MoreVertIcon from '@mui/icons-material/MoreVert'

function CountryDetail() {
  const { countryName } = useParams()

  const {
    data: countryData,
    isLoading,
    fetchError: error,
  } = useFetch(`https://restcountries.com/v3.1/name/${countryName}`)

  console.log(countryData)

  return (
    <DetailCard>
      {isLoading && (
        <div className="mt-20">
          <h1 className="text-3xl text-center">Loading Country Data...</h1>
        </div>
      )}

      {!isLoading && error && (
        <div className="mt-20">
          <h1 className="text-center text-3xl text-red-600">
            Could not find the country..
          </h1>
          <p className="text-center text-2xl text-slate-700">
            Enter correct country name
          </p>
        </div>
      )}

      {countryData &&
        countryData.map((country) => {
          return (
            <div key={country.name.common} className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <div className="flex rounded-full h-full w-16 items-center justify-center bg-orange-700 text-white">
                  <p className="text-4xl">{country.name.common[0]}</p>
                </div>
                <div className="flex-grow">
                  <h4 className="text-3xl font-bold uppercase">
                    {country.name.common}
                  </h4>
                  <p className="font-medium text-gray-600">
                    {country.capital ? country.capital[0] : country.name.common}
                  </p>
                </div>
                <MoreVertIcon fontSize="large" />
              </div>
              <div className="h-[300px] md:h-[400px] xl:h-[500px] w-full">
                <img
                  src={
                    country.coatOfArms.png
                      ? country.coatOfArms.png
                      : country.flags.png
                  }
                  alt="country COA"
                  className="h-full w-full"
                />
              </div>
              <div>
                <p className="">
                  The country belongs to <TextSpan>{country.region} </TextSpan>
                  region and
                  <TextSpan> {country.subregion} </TextSpan>
                  sub-region. Located at the
                  <TextSpan> {country.latlng[0]} </TextSpan>°N and
                  <TextSpan> {country.latlng[1]} </TextSpan>
                  °W, this country has population of
                  <TextSpan> {country.population} </TextSpan>
                  and area of <TextSpan>{country.area} </TextSpan> sqkm. This
                  country has {country.independent ? 'gained' : 'not gained'}{' '}
                  the independent, according to the CIA World Factbook.
                </p>
              </div>
              <div className="flex gap-10">
                <Link to={'/'}>
                  <ArrowBackIosIcon fontSize="large" />
                </Link>
                <a
                  href={country.maps.googleMaps}
                  className="hover:scale-110 duration-200 ease-in-out"
                >
                  <PlaceIcon fontSize="large" className="text-blue-500" />{' '}
                  <span className="text-blue-500">Open maps</span>
                </a>
              </div>
            </div>
          )
        })}
    </DetailCard>
  )
}

export default CountryDetail
