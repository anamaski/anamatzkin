<template>
  <nav class="navbar">
    <router-link to="/">Inicio</router-link>
    <router-link to="/reptiles">Reptiles</router-link>
    <router-link to="/anfibios">Anfibios</router-link>
    <router-link to="/aracnidos">Arácnidos</router-link>
  </nav>

  <router-view /> </template>

<style>
  body { background-color: #0b1311; margin: 0; font-family: sans-serif; }
  .navbar { display: flex; gap: 20px; background: #13221f; padding: 20px; }
  .navbar a { color: white; text-decoration: none; }
  .navbar a.router-link-active { color: #00ffaa; font-weight: bold; }
</style>