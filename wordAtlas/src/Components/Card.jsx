export const Card = ({ country }) => {
  const { countryName, capital, population, interestingFact } = country;

  return (
    <div className="w-[350px] h-[200px] bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl text-white p-6 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out ml-4 mr-4 ">
      <h2 className="text-3xl font-bold mb-2 text-teal-400">{countryName}</h2>
      <div className="space-y-1 text-sm ">
        <p>
          <span className="font-semibold text-gray-300">Capital:</span> {capital}
        </p>
        <p>
          <span className="font-semibold text-gray-300">Population:</span> {population.toLocaleString()}
        </p>
        <p className="mt-4 text-gray-400 italic">
          “{interestingFact}”
        </p>
      </div>
    </div>
  );
};
