import React from 'react';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';


const Navbar = () => {
    return(
        

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/movies">movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/users">users</Link>
      </li>
      
    </ul>
  </div>
</nav>




    );
};

export default Navbar;