import countryData from '../API/countryData.json';
import { Card } from '../Components/Card';


export const About = () => {
  return (
    <div className="h-auto w-auto bg-black text-white p-6">
      <p className="text-center pl-5 pr-5 text-3xl font-semibold mb-4 pt-14 pb-20">
        Here are the Interesting Facts <br/> we're proud of
      </p>
      <ul className="space-y-4 flex justify-center items-center flex-wrap gap-20 pt-10 pl-4 pr-4 ">
        {countryData.map(country => (
          <li key={country.id}>
             <Card country={country}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
