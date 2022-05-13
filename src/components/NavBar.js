import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" class="nav-link" href="#">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="apartments "class="nav-link" href="#">Apartments</Link>
      </li>
      <li class="nav-item">
        <Link to="create" class="nav-link" href="#">Create</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar