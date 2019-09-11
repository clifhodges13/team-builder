import React, { useState } from 'react'
import Form from './Components/Form'
import styled from 'styled-components'

export default function App() {

  const StyledCardContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 2%;
    text-align: center;
    color: #eee;
  `
  
  const StyledCard = styled.div `
    background: linear-gradient(to top right, #333, #555);
    width: 20%;
    padding: 2% 5%;
    margin: 1%;
    border: 1px solid #555;
    border-radius: 10px;
    & h3 {
      font-size: 30px;
    }
  `
  const StyledForm = styled.div `
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1% auto;
    border: 1px solid grey;
    padding: 1%;
    & input,
    & select {
      width: 200px;
      display: block;
      margin: 10%;
      border: 1px solid blue;
      border-radius: 8px;
      padding: 5%;
    }

  `

  const [members, setMembers] = useState([
    {name: 'test', email: 'test', role: 'test'},
    {name: 'test', email: 'test', role: 'test'},
    {name: 'test', email: 'test', role: 'test'},
    {name: 'test', email: 'test', role: 'test'},
    {name: 'test', email: 'test', role: 'test'},
  ])

  const [memberToEdit, setMemberToEdit] = useState('')

  const handleEdit = e => {
    e.preventDefault()
    console.log('edit button clicked')
    setMemberToEdit()
  }

  return (
    <>
      <StyledForm>
        <Form 
            members={members} 
            setMembers={setMembers} 
            memberToEdit={memberToEdit}
        />
      </StyledForm>
        
      <StyledCardContainer>
        {members.map((member, index) => {
          return(
            <StyledCard key={index}>
              <h3>{member.name}</h3>
              <p>{member.email}</p>
              <p>{member.role}</p>
              <button onClick={handleEdit} >Edit</button>
            </StyledCard>
            )
          }
        )}
      </StyledCardContainer>
    </>
  )
}
