import React, { useState } from 'react'
import Form from './Components/Form'

export default function App() {
  const [members, setMembers] = useState([
    {name: 'test', email: 'test', role: 'test'}
  ])

  const [memberToEdit, setMemberToEdit] = useState('')

  const handleEdit = e => {
    e.preventDefault()
    console.log('edit button clicked')
    setMemberToEdit()
  }

  return (
    <>
      <Form members={members} setMembers={setMembers} />
      
      {members.map((member, index) => {
        return(
          <div key={index}>
            <h3>Name: {member.name}</h3>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <button onClick={handleEdit} >Edit</button>
          </div>
          )
        }
      )}
    </>
  )
}
