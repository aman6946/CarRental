import React from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'

const Cars = () => {

  return (
    <div>

      {/* Header Section */}

      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>

        <Title
          title='Available Cars'
          subTitle='Browse our selection of premium vehicles available for your next adventure'
        />

        {/* Search Bar */}

        <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>

          <img src={assets.search_icon} alt="" className='w-4.5 h-4.5 mr-2'/>

          <input
            type="text"
            placeholder='Search by make, model, or feature'
            className='flex-1 outline-none text-sm'
          />

          <img src={assets.filter_icon} alt="" className='w-4.5 h-4.5 ml-2'/>

        </div>

      </div>


      {/* Cars Grid */}

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-12'>

        <p className='text-gray-500 mb-6'>
          Showing {dummyCarData.length} Cars
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

          {dummyCarData.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}

        </div>

      </div>

    </div>
  )
}

export default Cars