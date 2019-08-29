<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Vue Laravel API</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="btn btn-primary my-1 btn-block" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="btn btn-success my-1 ml-1 btn-block"
            to="/register"
            tabindex="-1"
            aria-disabled="true"
          >Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>