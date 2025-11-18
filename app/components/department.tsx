"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DepartmentCard({params,department, direction,imageSize}){
  // let isFav=false
  const [isFav ,setIsfav] = useState(false)
  
  const makeFav=()=>{
    // isFav= !isFav
    setIsfav(!isFav)}
  //alert(isFav)
  return(
    <Link href={`/${params.state}/${params.city}/${department.link}`} key={department.link} style={{textDecoration:"none",color:"black"}}>
            <div style={{backgroundColor:"rgba(181, 224, 232, 1)",border:"1px solid lightGray",borderRadius:"10px",margin:"10px",padding:"10px",display:"flex",flexDirection:direction}}>
              <Image src={`/${department.link}.png`} alt={department.display} width={imageSize} height={imageSize} />
<div style={{margin:"10px"}}>
              <h4 style={{fontFamily:"Georgia,serif",fontWeight:"revert"}}>{department.display}</h4>
              {isFav ? <span style={{color:"red"}}>♥</span> : <span style={{color:"gray"}}>♥</span>}
              <p style={{color:"rgba(11, 85, 109, 1)",fontWeight:"italic",marginTop:"0.5px"}}>{department.description}</p>
              <button onClick={makeFav}>Make Fav</button>
            </div>
            </div>
          </Link>

  )
}