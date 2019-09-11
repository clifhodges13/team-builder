import React, { useState } from 'react'

export default function Form(props) {

  const initialMemberCard = {
    name: '',
    email: '',
    role: ''
  }

  const [memberCard, setMemberCard] = useState(initialMemberCard)

  const handleChange = e => {
    setMemberCard({
      ...memberCard,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.setMembers([
      ...props.members,
      memberCard
    ])
    resetForm(e)
  }

  const resetForm = e => {
    e.preventDefault()
    setMemberCard(initialMemberCard)
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          value={memberCard.name}
          onChange={handleChange} />
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={memberCard.email}
          onChange={handleChange} />
        <input 
          type="text" 
          placeholder="Role" 
          name="role"
          value={memberCard.role}
          onChange={handleChange} />
        <button type="submit">Become a Member!</button>
        <button type="submit" onChange={resetForm} >Reset Form</button>
      </form>
    </>
  )
}
