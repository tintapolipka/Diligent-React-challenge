import HeroesListItem from "./heroes-list-item";
import { callApi } from "../call-api";
import "./heroes-list.css"
import {Hero} from '../interfaces/hero-interfaces';

import { useFetchSimulation } from "../hooks/useFetchSimulation";




function HeroesList() {
  const {isLoading,error,data} = useFetchSimulation(()=>callApi<Hero[]>('heroes'));
  
  return (
    <>
      <h2>Heroes</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="heroes-grid">
        
        { data  &&
        data.map((hero,index) =><HeroesListItem key={index} id={hero.id} name={hero.name} isAvailable={hero.available}/>)
        }
        
      </div>
    </>
  );
}

export default HeroesList;
