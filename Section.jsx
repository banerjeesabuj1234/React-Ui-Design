
  import Navbar from "./Navbar"
import Page1Content from "./Page1content"
 export default function Section(){

    const users =[
        {  img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           intro:"",
           color:"royalblue",
           tag:"Satisfied" 
        },
        {
           img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           intro:"",
            color:"red",
           tag:"Undersurved" 
        },
        {
           img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           intro:"",
            color:"orange",
           tag:"Underbanked" 
        },
        {
            img:"https://images.unsplash.com/photo-1613324996029-f6190a17838f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro:"",
            color:"lightseagreen",
           tag:"UnderWare" 
        },
        {    
            img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro:"",
            color:"black",
           tag:"Average" 
        }
        
    ]

    
    return(
        <div className="h-screen w-ful">
            <Navbar />
            <Page1Content Users={users} />
        </div>
    )
 }