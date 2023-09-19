import { Hero} from '@/components'
import Image from 'next/image'
import { Wrap } from '@/components';
import { WrapProps } from '@/types';

export default async function Home({ searchParams }: WrapProps) {
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <Wrap searchParams={searchParams} />
      {/* <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <TextContainer /> 
        <HomeFilter />

        {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
      </div> */}
     
    </main>
  )
}
