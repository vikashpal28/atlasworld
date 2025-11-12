import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CountryCard = ({country})=>{

    const nameFild = (country)=>{
        const name = country.name?.common || "undefined";
        const length = 10;
        return name.length > length ? name.slice(0,length)+"....":name;
    }
    const capitalField = (country)=>{
        const cap = Array.isArray(country?.capital) && country.capital.length > 0
    ? country.capital[0]
    : "undefined";
        const length = 10;
        return cap.length > length ? cap.slice(0,length)+"...." : cap;
    }
   return(
    <>
    <li className="h-[400px] w-[250px] bg-linear-to-r from-gray-900 to-red-950 rounded-lg text-white flex flex-col items-start pl-4 pr-4 pt-4 gap-4">
      <img src={country.flags.svg} alt={`${country.name?.common} flag`} className="h-1/3"/>
      <h1 className="text-2xl">{nameFild(country)}</h1>
      <p>Population: {country.population.toLocaleString('en-IN')}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {capitalField(country)}</p>
      <NavLink to={`/country/${country.name?.common}`}>
      <button className="border border-white outline-0 pt-2 pb-2 pl-4 pr-4 rounded-2xl w-[150px] flex items-center ">Read More <FaLongArrowAltRight /></button>
      </NavLink>
      
    </li>
    </>
   )
}