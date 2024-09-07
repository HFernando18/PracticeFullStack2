import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    fetchContacts()
  }, [])
  const fetchContacts = async() => {
    const response = await fetch("")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  return (
    <>
      
    </>
  )
}

export default App
