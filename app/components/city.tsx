import Image from "next/image";
import Link from "next/link";
export default function CityCard({params, city, direction, imageSize}){
  
    return(
       <Link href={`/${params.state}/${city.link}`}>
        <div style={{textDecoration:"none",color:"black",backgroundColor:"rgba(181, 224, 232, 1)",border: "1px solid lightGray", borderRadius: "10px", padding: "10px",margin:"20px",display:"flex",flexDirection:direction,gap:"10px"}}>
        
         <Image src={`/${city.link}.png`} alt={city.display} width={imageSize} height={imageSize} />
         <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{fontFamily:"Georgia,serif",fontWeight:"revert"}}>{city.display}</h4>

          <p style={{fontSize:"13px",color:"rgba(11, 85, 109, 1)",fontWeight:"italic", marginTop:"5px"}}>{city.description}</p>
         
         </div>
        
           </div>
</Link>
          )
}