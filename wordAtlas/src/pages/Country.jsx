import { useTransition, useEffect, useState } from "react";
import { getData } from "../API/postApi";
import { Loader } from "../UI/Loader";
import { CountryCard } from "../Components/CountryCard";
import { SearchFilter } from "../Components/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;
  const searchCountry = (country) => {
    if (search) {
      return country?.name?.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country?.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
    <>
      <section className="h-full w-full bg-black">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
        <ul className="flex justify-center  items-center gap-8 flex-wrap pl-10 pr-10 pt-5 pb-4">
          {filterCountries.map((country, index) => {
            return <CountryCard country={country} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
};
