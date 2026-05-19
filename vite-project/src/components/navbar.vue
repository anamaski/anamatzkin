<template>
  <nav>
    <span>LOGO</span>

    <ul>
      <li>Inicio</li>
      <li>Sección</li>
      <li>Contacto</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  background: #eee;
  padding: 10px;
}

ul {
  display: flex;
  gap: 10px;
  list-style: none;
}
</style>   