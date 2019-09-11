import React, { useState } from 'react'

export default function Form(props) {

  const [memberCard, setMemberCard] = useState({
    name: '',
    email: '',
    role: ''
  })

  const handleChange = e => {
    setMemberCard({
      ...memberCard,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(memberCard)
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          onChange={handleChange} />
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
          onChange={handleChange} />
        <input 
          type="text" 
          placeholder="Role" 
          name="role"
          onChange={handleChange} />
        <button type="submit">Become a Member!</button>
      </form>
    </>
  )
}
