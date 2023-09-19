import React from 'react'
import { CustomFilter, SearchBar } from '.'
import { fuels, yearsOfProduction } from '@/constant'

const HomeFilter = () => (
  <div className='home__filters'>
    <SearchBar />

    <div className='home__filter-container'>
    <CustomFilter title='fuel' options={fuels} />
    <CustomFilter title='year' options={yearsOfProduction} />
  </div>
  </div>
)

export default HomeFilter