import Image from "next/image";
import Link from "next/link";
let doctorProfile=
    {name:"Dr John",exp:"12 years"}

export default function DoctorProfilePage({params}) {
    return(
    <div style={{marginLeft:"20px",marginRight:"20px"}}>
        
        <header style={{alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",padding:"20px",margin:"20px",gap:"10px",fontWeight:"bold"}}>
            <h1>{doctorProfile.name}</h1>

        </header>
        <div style={{backgroundColor:"rgba(181, 224, 232, 1)"}}>
        <div style={{border:"1px solid lightBlue",margin:"20px",borderRadius:"10px",padding:"10px"}}>
        <section style={{margin:"20px",padding:"20px"}}>
            <h3 style={{fontWeight:"bold"}}>{"Basic Info"}</h3>
            <p>{doctorProfile.name}</p>
        </section>
        </div>
        <div style={{border:"1px solid lightBlue",margin:"20px",borderRadius:"10px",padding:"10px"}}>
        <section style={{margin:"20px",padding:"20px"}}>
        
            
            <h3 style={{fontWeight:"bold"}}>{"About"}</h3>
            <p>Dr. John is a board-certified cardiologist with over 12 years of experience dedicated to providing comprehensive and compassionate heart care. </p>
            
        </section>
        </div>
        <div style={{border:"1px solid lightBlue",margin:"20px",borderRadius:"10px",padding:"10px"}}>
        <section style={{margin:"20px",padding:"20px"}}>
        <h3 style={{fontWeight:"bold"}}>{"Address"}</h3>
        </section>
        </div>
        <div style={{border:"1px solid lightBlue",margin:"20px",borderRadius:"10px",padding:"10px"}}>
        <section style={{margin:"20px",padding:"20px"}}>
        <h3 style={{fontWeight:"bold"}}>{"Faqs"}</h3>
        </section>
        </div>
    </div>
    </div>
)}