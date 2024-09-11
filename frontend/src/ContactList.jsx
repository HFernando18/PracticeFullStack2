import React from "react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {

const onDelete = async (id) => {
  try{
    const options = {
      method: "DELETE"
    }

    const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)
    if(response.status === 200){
      updateCallback()
    } else {
      console.error("Error al eliminar contacto")
    }
  } catch (error) {
    alert(error)
  }
}

  return (
    <div>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => updateContact(contact)}>Actualizar</button>
                <button onClick={() => onDelete(contact.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList