import Header from '../components/Header'
import Footer from '../components/Footer'
import { format } from 'date-fns';

function Search() {  
 

  return (
    <div className='bg-white text-black'>
      <Header/>

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
         <p className='text-xs text-gray-600 font-semibold'>300+ Stays guests</p>
         <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in</h1>
         <div className='hidden md:flex space-x-10 px-3 mt-8  text-sm text-gray-600 font-semibold whitespace-nowrap'>
            <p className='button'>Cancellation flexibilty</p>
            <p className='button'>Types of place</p>
            <p className='button'>Price</p>
            <p className='button'>Room & beds</p>
            <p className='button'>More filters</p>
         </div>
        </section>
      </main>


      <Footer/>
    </div>
  )
}

export default Search;



