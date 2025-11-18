export async function GET(request: Request) {  
    
    let doctors=[
    {link:"John",name :"Dr.John Smith",speciality:"Cardiologist",Experience:"12 years"},
    {link:"Emily",name :"Dr. Emily johnson",speciality:"Neurologist",Experience:"9 years"},
    {link:"Michael",name :"Dr. Michael Brown",speciality:"Pediatrician",Experience:"2 years"},
    {link:"Sarah",name :"Dr. Sarah Devis",speciality:"Internist",Experience:"5 years"},
    {link:"Katherine",name :"Dr. Katherine",speciality:"Anesthesiologist",Experience:"3 years"},
    {link:"Nancy",name :"Dr. Nancy C. Andreasen",speciality:"Psychiatrist",Experience:"8 years"},
    {link:"David",name :"Dr. David J.Goldberg",speciality:"Dermatologist",Experience:"5 years"}
]
    return new Response(JSON.stringify(doctors), {
        status: 200,
        headers: {'Content-Type': 'application/json'
        },
    });
}
