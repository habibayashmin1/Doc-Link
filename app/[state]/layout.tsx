
export default function RootLayout({
  children,params
}: Readonly<{
  children: React.ReactNode;
  params : string
}>) {
  return (
    <div>
        <header style={{display: "flex", justifyContent: "center",flexDirection: "column", alignItems: "center"}}>
    <h1 style={{margin:"10px",fontWeight:"bold",fontSize:"30px"}}>{ params.state.toUpperCase()}</h1>
    
      </header>
    {children}
    </div>
    
  );
}