import type { NextPage } from 'next';
import { Layout } from '../layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title='Calorcito Home' description='Your calories tracker'>
        <h1
          className='text-5xl md:text-[5rem] leading-normal font-extrabold bg-clip-text text-transparent
        bg-gradient-to-r from-grape to-raspberry mb-0'
        >
          Calorcito
        </h1>

        <h2 className='-mt-2 mb-8 font-bold'>🍕 Your calories tracker 🥦</h2>

        <form className='flex flex-col'>
          <label className='flex flex-col items-center gap-2'>
            <span className='text-gray-900 font-semibold'>
              Search for an ingredient
            </span>
            <input
              type='text'
              placeholder='E.g. tomato'
              className='border-2 outline-none border-purple-700 rounded-lg text-center p-2 capitalize'
            />
          </label>

          <input
            type='submit'
            className='bg-raspberry py-1 rounded-lg text-white font-extrabold cursor-pointer
              hover:bg-grape hover:transition-colors duration-300 mt-4'
            value='ADD!'
          />
          <input
            type='button'
            className='bg-white border-2 border-grape py-1 rounded-lg text-grape font-extrabold cursor-pointer
              hover:bg-grape hover:text-white hover:transition-colors duration-300 mt-2'
            value='INFO'
          />
        </form>
      </Layout>
    </>
  );
};

export default Home;
