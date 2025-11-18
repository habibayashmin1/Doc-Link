export async function GET(request: Request) {
let departments=[{
  link:"cardiology",
  display:"Cardiology",
  description:"Diagnoses and treats disorders of the heart and blood vessels.",
  featured: true
},{
  link:"neurology",
  display:"Neurology",
  description:"Specializes in disorders of the brain, spinal cord, and nervous system.",
  featured: true
},{
  link:"pediatrics",
  display:"Pediatrics",
  description:"Specializes in the health care of infants, children, and adolescents.",
  featured: false
},{
  link:"internal-medicine",
  display:"Internal Medicine",
  description:" Focuses on preventing, diagnosing, and treating complex illnesses and diseases in adults.",
  featured: false
},{
  link:"anesthesiology",
  display:"Anesthesiology",
  description:"Ensures patient comfort,safety, and pain control during surgery and medical procedures",
  featured: false
},{
  link:"psychiatry",
  display:"Psychiatry",
  description:"A medical speciality that focuses on the diagnosis,treatment and prevention of mental illness and disorders.",
  featured: false
},{
  link:"dermatology",
  display:"Dermatology",
  description:"Provides medical care for skin,hair and nails.",
  featured: false
},]    
    return new Response(JSON.stringify(departments), {
        status: 200,
        headers: {'Content-Type': 'application/json'
        },
    });}