<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    navbar: Navbar
  }
};
</script>
import { Script } from "vm";

<style>
</style>
