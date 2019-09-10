import React, { useState } from 'react'

export default function Form() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Role" />
      </form>
    </div>
  )
}
