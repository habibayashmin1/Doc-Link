"use client";
import Image from "next/image";
import Link from "next/link";
import DepartmentCard from "../../components/department"
import {useEffect, useState} from "react";



export default function CityPage({ params}:{params:{state:string, city:string, featured:boolean}} ) {
 const [departmentsFromApi, setDepartmentsFromApi] = useState([]);
 useEffect(() => {
  async function fetchDepartments(){
    let data = await fetch(`http://localhost:3000/api/departments`);
    let departmentsFromApi = await data.json();
    setDepartmentsFromApi(departmentsFromApi);
  }
  fetchDepartments();
 },[]);
  
  return (
   <div style={{marginLeft: "90px",marginRight: "90px",marginTop: "20px"}}>
    <header style={{display: "flex", justifyContent: "center",flexDirection: "column", alignItems: "center"}}>
    <h1 style={{margin:"10px",fontWeight:"bold",fontSize:"30px"}}>{"Healthcare in " + params.city.toUpperCase()}</h1>
    <p style={{margin:"10px",color:"gray",fontSize:"18px"}}>Find top-rated doctors and medical facilities in your area.</p>
    </header>
    <section style={{margin:"20px",padding:"20px"}}>
    <h3 style={{fontWeight:"bold"}}>Featured departments</h3>
    <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
    {departmentsFromApi.filter(department=> department.featured).
    map(department=> <DepartmentCard key={department.link} params={params} department={department} direction="column" imageSize={400}/> ) }

   </div>
    </section>
    <section style={{margin:"20px",padding:"20px"}}>
    <h3 style={{fontWeight:"bold"}}>All Departments</h3>
      {departmentsFromApi.map(department=> <DepartmentCard key={department.link} params={params} department={department} direction="row" imageSize={100}/>)}
    </section>
    
    
   </div>
  );
}
