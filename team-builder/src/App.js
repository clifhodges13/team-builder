import React, { useState } from 'react'
import Form from './Components/Form'

export default function App() {
  const [members, setMembers] = useState('')

  return (
    <>
      <Form setMembers={setMembers} />
      <div>
        <h3>{members.name}</h3>
        <p>{members.email}</p>
        <p>{members.role}</p>
      </div>
    </>
  )
}
