import CarCard from '@/components/CarCard'
import CustomButton from '@/components/CustomButtom'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import { fetchCars } from '@/utils/index'

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isEmptyData = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl text-sxtrabold'>Car Catalogue</h1>
          <p>explore the car yo migth like</p>
        </div>
      </div>
      <div className='home__filters'>
        <SearchBar />

        <div className='home__filter-container'>
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>
      {!isEmptyData ? (
        <section>
          <div className='home__cars-wrapper'></div>
          {allCars?.map((car) => (
            <CarCard car={car} />
          ))}
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </main>
  )
}
