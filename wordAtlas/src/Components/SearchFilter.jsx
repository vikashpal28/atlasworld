export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sortcountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a?.name?.common.localeCompare(b?.name?.common)
        : b?.name?.common.localeCompare(a?.name?.common);
    });
    setCountries(sortcountry);
  };

  return (
    <>
      <section className="flex justify-around items-center flex-wrap pt-3 text-white gap-4 pl-3 pr-3">
        <input
          type="text"
          placeholder="Enter the Country Name"
          value={search}
          onChange={handleChange}
          className="text-white border border-white outline-0 p-2 rounded-md"
        />

        <div>
          <button className="border border-white outline-0 pt-2 pb-2 pl-4 pr-4 rounded-md" onClick={() => sortCountries("asc")}>Asc</button>
        </div>
        <div>
          <button className="border border-white outline-0 pt-2 pb-2 pl-4 pr-4 rounded-md" onClick={() => sortCountries("des")}>Desc</button>
        </div>

        <div>
          <select 
            className="text-white bg-black border border-white pt-2 pb-2 pl-3 rounded-md"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
};
