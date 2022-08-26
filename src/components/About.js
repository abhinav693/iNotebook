import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
  })
  return (
    <div>
      About {a.state.name} of class {a.state.class}
    </div>
  )
}

export default About
