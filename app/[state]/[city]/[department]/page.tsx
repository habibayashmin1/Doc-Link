"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function DepartmentPage({ params}:{params:{state:string,city:string,department:string}}) {
const[doctors,setDoctors]=useState([]);
useEffect(()=>{
    async function fetchDoctors(){
        let data= await fetch(`http://localhost:3000/api/doctors`); 
        let doctorsFromApi= await data.json();
        setDoctors(doctorsFromApi);
    }
    fetchDoctors();
},[]);


    return(
        <div style={{marginLeft: "180px",marginRight: "180px"}}>
            <header style={{display: "flex", justifyContent: "center",flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontWeight:"bold"}}>{params.department.toUpperCase()}</h1>
            <p>Find Top Rated Doctors and medical facilities in your area</p>

            <input type="text" placeholder="Search doctors by name,speciality..." style={{width:"400px",padding:"10px",marginTop:"10px",borderRadius:"5px",border:"1px solid lightGray"}}/>
            
            </header>
            
            <section style={{margin:"20px",padding:"20px"}}>
            <h3 style={{fontWeight:"bold"}}>All Doctors</h3>
            {doctors.map(doc=>{
                return(
                    <Link href={`/${params.state}/${params.city}/${params.department}/${doc.link}`} key={doc.link} style={{textDecoration:"none",color:"black"}}>
                    <div key={doc.link}  style={{backgroundColor:"rgba(181, 224, 232, 1)",border:"1px solid lightBlue",borderRadius:"10px",padding:"10px",margin:"10px",display:"flex",flexDirection:"row",gap:"10px"}}>
                        <Image src={`/${doc.link}.png`} alt={doc.name} width={100} height={100} />
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center", margin:"10px"}}>
                        <h4 style={{fontFamily:"Georgia,serif",fontWeight:"bolder"}}>{doc.name}</h4>           
                    <p style={{fontFamily:"Verdana, sans-serif",fontWeight:"lighter"}}>exp-{doc.Experience}</p> 
                    <p style={{fontFamily:"Verdana, sans-serif"}}>speciality-{doc.speciality}</p> 
                        </div>
                               
            </div> 
                </Link>
            )})}
    
            </section>
            
        </div>
    )
}