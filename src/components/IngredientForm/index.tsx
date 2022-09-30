import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";

export default function IngredientForm() {
  const [ingredient, setIngredient] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("i was triggered");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setIngredient(e.target.value);
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="flex flex-col items-center gap-2">
        <span className="dark:text-gray-300 text-gray-900 font-semibold">
          Search for an ingredient
        </span>
        <input
          type="text"
          name="ingredient"
          value={ingredient}
          onChange={handleChange}
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
  );
}
