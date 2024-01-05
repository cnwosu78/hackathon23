import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./dash.css";
// import { Link } from "react-router-dom";

function Dashboard() {

  return (
    
  <section>
    <nav class="navbar navbar-expand-lg topbar-main navbar-dark fixed-top">
      <div class="container">
        <a href='/' class="navbar-brand">Fire Fighting Bytes</a>
          {/* HAmburger Button */}
          <button
            class="navbar-toggler"
            type="button"x
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="#boxes" class="nav-link">Prevention & Fighting</a>
            </li>
            <li class="nav-item">
              <a href="#dectecting" class="nav-link">Detecting Wildfires</a>
            </li>
            {/* <li class="nav-item">
                <Link to="./chart" class="nav-link">Data Findings</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    <section class="topbar-main" style={{ height: '50px' }}></section>


    {/* Showcase */}
    <div
      class="topbar-main text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
    >
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>The Problem </h1>
            <p class="lead my-4">
            As wildfires increase in strength and prevalence, we need to be 
            able to detect, fight, and prevent wildfires
            </p>
          </div>
          {/* <img
            class="img-fluid w-50 d-none d-sm-block"
            src="img/showcase.svg"
            alt="Showcase"
          /> */}
        </div>
      </div>
    </div>
    <section class="topbar-main" style={{ height: '50px' }}></section>


    {/* <!-- Detectin wildfires info --> */}
    <section class="p-5 bg-dark text-light" id="dectecting">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>Detecting Wildfires</h2>
            <p class="lead">
            We can currently detect wildfires through infrared technology, lookout stations, 
            air patrols, and computer technology. These technologies help us to 
            accurately detect wildfires. Newer technologies like drones are also 
            assisting greatly, by taking humans out of being near wildfires. 
            This helps keep wildfire fighters away from carcinogenic compounds
             and from smoke inhalation since wildfire fighters have inadequate protection.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section style={{ height: '50px' }}></section>

    {/* <!-- Boxes --> */}
    <section class='p-5'  id='boxes'>
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md p-5">
            <div class="card bg-secondary text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-person-square"></i>
                </div>
                <h3 class="card-title">Prevention</h3>
                <p class="card-text">
                Currently, one of the most common practices in preventing 
                wildfires is by burning portions of the forest to eliminate the 
                fuel in the fire equation. This has proven to be effective in 
                multiple cases.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md p-5">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="card-title">Fighting Wildfires</h3>
                <p class="card-text">
                Mainly, we fight wildfires with suppression tactics: either by 
                removing the heat or the fuel. This can be done by spraying 
                fire-retardant or using water to reduce the heat. Or you could 
                remove the fuel by either hand removing, large bulldozers, or 
                controlled forest fires
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* <img src="/Untitled1.png" 
    class="img-fluid" alt="Responsive pic" /> */}

    {/* Footer */}
    <footer class="p-5 bg-dark text-white text-center position-relative">
      <div class="container">
        <p class="lead">Copyright &copy; 2023 Bytes of Brilliance</p>
        <a href="/" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  </section>

  );
}

export default Dashboard;