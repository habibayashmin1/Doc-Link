"use client";
import Image from "next/image";
import Link from "next/link";
import CityCard from "../components/city"
import {useEffect, useState } from "react";


export default function StatePage({ params}:{params:{state:string}}) {
const [citiesFromApi, setCitiesFromApi] = useState([])

 
useEffect(() => {
  async function fetchCities() {
    let data = await fetch(`http://localhost:3000/api/cities`);
    let citiesFromApi = await data.json();
    setCitiesFromApi(citiesFromApi);
  }
 fetchCities();
}, []);
let citiesForState = citiesFromApi.find(
  (item) => item.state.toLowerCase() === params.state?.toLowerCase()
)?.cities || [];
  return (
    <div>
      <section style={{justifyContent:"start", margin:"20px", padding:"20px"}}>
        <h3 style={{fontWeight:"bold", fontSize:"20px"}}>Featured Healthcare Destinations</h3>
        <div>
          {citiesForState?.filter(city=> city.featured).map(city=> <CityCard key={city.link} params={params} city={city} direction="row" imageSize={100}/>
          )}
          </div>

      </section>
      
     
    <section style={{margin: "20px"}}>
      <h3 style={{fontWeight:"bold",fontSize:"20px"}}>All destinations</h3>
      <div style={{margin:"10px"}}>
      {citiesForState?.map(city=> <CityCard key={city.link} params={params} city={city} direction="row" imageSize={100}/>
        )}
      </div>
    </section>
    <section style={{backgroundColor:"rgba(160, 233, 268, 1)",margin:"40px",border: "1px solid lightgray", borderRadius: "10px", padding: "40px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h3 style={{margin:"10px"}}>Expand your practice?</h3>
      <p style={{margin:"10px"}}>Join our growing network and connect with patients in your area. Claim your free profile today.</p>
      <button>Join Our Network</button>
    </section>
    
    </div>
        
  );
}
