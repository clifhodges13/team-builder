import React, { useState } from 'react'

export default function App() {
  const [data, setData] = useState([])

  return (
    <div>
      {data.map(member => {
        return (
          <div>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )
      })}
    </div>
  )
}
