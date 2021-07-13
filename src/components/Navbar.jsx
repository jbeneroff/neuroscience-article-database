import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/'><h1>NeuroLog</h1></Link>
      <Link to='/all-articles'>Articles</Link>
      <Link to='/new-article'>New Article</Link>
    </div>
  )
}