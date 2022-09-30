import type { NextPage } from "next";
import { Layout } from "@/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Calor Home" description="Your calories tracker">
        <h1
          className="text-5xl md:text-9xl leading-normal font-extrabold bg-clip-text text-transparent
        bg-gradient-to-r from-hard-orange to-light-sunny-orange mb-0"
        >
          Calor
        </h1>

        <h2 className="-mt-2 mb-8 font-bold">🍕 Your calories tracker 🥦</h2>

        <form className="flex flex-col">
          <label className="flex flex-col items-center gap-2">
            <span className="dark:text-white text-gray-900 font-semibold">
              Search for an ingredient
            </span>
            <input
              type="text"
              placeholder="E.g. tomato"
              className="border-2 outline-none transition-colors duration-300
              border-gray-600 dark:focus:border-hard-orange dark:border-white
              focus:border-[#ffb347] rounded-lg text-center p-2 capitalize"
            />
          </label>

          <input
            type="submit"
            className="bg-hard-orange dark:bg-gray-200 dark:text-gray-600 
            dark:hover:text-gray-800 py-1 rounded-lg text-white font-extrabold cursor-pointer
            hover:bg-hard-orange hover:transition-colors duration-300 mt-4"
            value="ADD!"
          />
          <input
            type="button"
            className="bg-white dark:bg-gray-900 border-2 dark:hover:bg-hard-orange
            border-hard-orange py-1 rounded-lg text-hard-orange font-extrabold cursor-pointer
            hover:bg-hard-orange hover:text-white hover:transition-colors duration-300 mt-2"
            value="INFO"
          />
        </form>
      </Layout>
    </>
  );
};

export default Home;
