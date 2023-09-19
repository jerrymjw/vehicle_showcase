
import { CarCard, HomeFilter, ShowMore, TextContainer } from '.'
import { fetchCars } from '@/utils';
import { WrapProps } from '@/types';


const Wrap = async({ searchParams }: WrapProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <TextContainer /> 
      <HomeFilter />

      {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore 
              pageNumber = {(searchParams.limit || 10) / 10}
              isNext = {(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
    </div>
  )
}

export default Wrap;