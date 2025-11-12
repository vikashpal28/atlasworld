import footerApi from "../API/footerApi.json";
import { FooterCard } from "./FooterCard";
export const Footer = () =>{
    return <footer>
       <ul className="flex justify-around items-center bg-gray-900 pl-3 pr-3 pt-2 pb-3 flex-wrap gap-4">
        {
            footerApi.map((info)=>(
                <li key={info.id}>
                    <FooterCard info={info}/>
                </li>
            ))
        }
       </ul>
    </footer>
}