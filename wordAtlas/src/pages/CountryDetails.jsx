import { useState } from "react";
import { useEffect } from "react";
import { useTransition } from "react";
import { useParams } from "react-router-dom"
import { getDataOfCountry } from "../API/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () =>{
   const param = useParams();
//    console.log(param);
    const [isPending, startTransition] = useTransition();
    const[country ,setCountry] = useState(null);
    

    
    useEffect(()=>{
     startTransition(async()=>{
     const res = await getDataOfCountry(param.id);
     console.log(res.data[0]);
      if(res.status === 200){
        setCountry(res.data[0]);
      }
     })
    },[])

    if(isPending) return <Loader/>

    return(
        <>

        <section className="h-auto w-auto bg-black  text-white">
          <h1 className="text-center text-2xl pt-4 pb-4">Country Page</h1>
       <div className="flex justify-center items-center  flex-wrap gap-20 pt-20 pb-45 border border-gray-700">
        <div className="pt-14 flex justify-center w-[400px] h-[500px] pl-2 pr-2 ">
  <img src={country?.flags?.svg} alt={country?.flags?.svg || "flags"} />
</div>
        <div className="text-xl flex flex-col gap-4 ">
         <h1 className="text-2xl">{country?.name?. official}</h1>
        <p>
  Native Names: {country?.name?.nativeName
    ? Object.keys(country.name.nativeName)
        .map((key) => country.name.nativeName[key]?.common)
        .join(", ")
    : "N/A"}
</p>

         <p>Population: {country?.population.toLocaleString('en-In')}</p>
         <p>Region: {country?.region}</p>
         <p>Sub Region: {country?.subregion}</p>
         <p>Capital: {country?.capital}</p>
         <p>Top Level Domain: {country?.tld[0]}</p>
         <p>Currencies: {country?.currencies
            ? Object.keys(country.currencies)
         .map((key)=>country.currencies[key]?.name) : "N/A"}</p>
         <p>Language: {country?.languages ? Object.keys(country.languages)
         .map((key)=>country.languages[key]) : "N/A"}</p>
        </div>
        </div>
        </section>
        
        </>
    )
}