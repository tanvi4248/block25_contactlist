import { useState, useEffect } from "react"

function SelectedContact({selectedContactId}){
    const[singlecontact,setSingleContact] = useState([])
    useEffect(()=>{
        async function fetchSingleContact(){
          try{
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const data = await response.json()
            setSingleContact(data)
          }
       catch(error){
          console.log(error)
        }
      }
      fetchSingleContact()
      }, [])

      return(
        <div>
            <h3>Name:{singlecontact.name}</h3>
            <div>Email:{singlecontact.email}</div>
            <div>Phone:{singlecontact.phone}</div>
        </div>
      )
}
export default SelectedContact