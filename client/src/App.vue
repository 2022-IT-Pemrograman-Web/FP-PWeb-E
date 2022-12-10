<template>
  <!-- <div class="container"> -->

    <nav class="navbar navbar-expand-lg fixed-top" style="background-color:#E5B323;">
      <div class="container container-fluid">
        <a class="navbar-brand" href="#">ENDORSIN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">            
              <router-link class="nav-link fw-bold" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/company">Company</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/service">Service</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/collaboration">Collaboration</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/register">regist</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/login">login</router-link>
            </li> -->
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li> -->
          </ul>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:yellow;">
                <img src="assets/person.png" alt="person" width="50" height="50">
            </a>
            <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/login">login</router-link></li>
                <li><router-link class="dropdown-item" to="/register">register</router-link></li>
            </ul>    
          </div>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>

  <!-- </div> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
