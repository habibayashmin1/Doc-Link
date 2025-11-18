import Link from "next/link";
 export default function HeaderCard({}){
    return(
<header>
  <div>
    <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px", borderBottom: "1px solid lightgray"}}>
            <h2 style={{display:"flex", alignItems:"center",gap:"8px"}}>Healthcare Directory</h2>
            <div style={{display:"flex",flexDirection:"row", gap:"20px",justifyContent:"center"}}>
              <Link href="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
              <Link href="/about" style={{textDecoration:"none",color:"black"}}>About</Link>
              <Link href="/contact" style={{textDecoration:"none",color:"black"}}>Contact us</Link>
            </div>
</nav>
</div>
          </header>
    )}