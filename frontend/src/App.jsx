import { useEffect, useState } from "react"
import ContactList from "./contactList"
import ContactForm from "./ContactForm"
import "./App.css"

function App() {
  const [contacts, setContacts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchContacts()
  }, [])
  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openCreateModal = () => {
    if(!isModalOpen) setIsModalOpen (true)
  }

  return (
    <>
      <ContactList contacts={contacts} />
      <button onClick={openCreateModal}>Crear Nuevo Contacto</button>
      {
        isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm />
          </div>
        </div>
      }

    </>
  )
}

export default App