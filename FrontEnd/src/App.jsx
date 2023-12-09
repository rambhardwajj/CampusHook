"use client"
import React from 'react'
import StudentLogin from './components/StudentLogin'
import StudentSignUp from './components/StudentSignUp'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <StudentSignUp/>
      <StudentLogin/>
    </>
  )
}

export default App