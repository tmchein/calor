import type { NextPage } from "next";
import { Layout } from "@/layout";
import IngredientForm from "@/components/IngredientForm";

const Home: NextPage = () => {
  return (
    <Layout title="Calor Home" description="Your calories tracker">
      <h1
        className="text-5xl md:text-9xl leading-normal font-extrabold bg-clip-text text-transparent
        bg-hard-orange dark:bg-gradient-to-r from-hard-orange to-light-sunny-orange mb-0"
      >
        Calor
      </h1>
      <h2 className="-mt-2 mb-8 font-bold text-gray-800 dark:text-gray-300">
        🍕 Your calories tracker 🥦
      </h2>
      <IngredientForm />
    </Layout>
  );
};

export default Home;
