import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../images/logo.jpg";
import './Header.css';
function Header (){
    return (
        <>
        <div className="container">
            <div className="header">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
       <div class="container-fluid">
         <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="#">
        <img src={Logo} alt="logo" class="rounded-pill logo"/>
        </a>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contect us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-success" type="button">Search</button>
      </form>
  </div>
</nav>
</div>
</div>

        </>
    )
}

export default Header;