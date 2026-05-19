<template>
  <nav class="navbar">
    <a href="#" class="logo">🌿 Exo<span>Fauna</span></a>
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/reptiles">Reptiles</router-link></li>
      <li><router-link to="/anfibios">Anfibios</router-link></li>
      <li><router-link to="/aracnidos">Arácnidos</router-link></li>
    </ul>
    <button class="btn-carrito">🛒 (0)</button>
  </nav>

  <router-view />

  <footer>
    <p>© 2026 ExoFauna. Todos los derechos reservados. Venta bajo normativas CITES.</p>
  </footer>
</template>

<style>
  /* Aquí pegás tus estilos generales (los de :root, body, navbar, footer) */
  :root { --bg-principal: #0b1311; --bg-tarjetas: #13221f; --verde-neon: #00ffaa; --verde-esmeralda: #0ea871; --texto-blanco: #f4f7f6; --texto-gris: #a0afac; }
  body { background-color: var(--bg-principal); color: var(--texto-blanco); margin: 0; font-family: sans-serif; }
  .navbar { display: flex; justify-content: space-between; padding: 20px 8%; background: rgba(11, 19, 17, 0.95); border-bottom: 1px solid rgba(0, 255, 170, 0.1); }
  .nav-links { list-style: none; display: flex; gap: 35px; }
  .nav-links a { color: var(--texto-gris); text-decoration: none; }
  .router-link-active { color: var(--verde-neon) !important; font-weight: bold; }
  footer { text-align: center; padding: 30px; color: var(--texto-gris); margin-top: 60px; }
</style>