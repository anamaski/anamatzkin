<template>
  <header class="hero">
    <h1>Ejemplares <span>Exóticos</span> Únicos</h1>
    <p>Criadero legalizado y certificado. Llevá la belleza de la naturaleza a tu hogar.</p>
  </header>

  <main class="contenedor-productos">
    <h2 class="titulo-seccion">⭐ Los más destacados</h2>
    <div class="grid-productos">
      <div class="tarjeta-animal">
        <img src="https://www.reptilmadrid.com/wp-content/uploads/2022/05/camaleon-pantera-furcifer-pardalis-ambilobe.jpg" class="imagen-animal">
        <div class="info-animal">
          <h3>Camaleón Pantera</h3>
          <p class="descripcion">Increíbles colores vivos y cambiantes.</p>
        </div>
      </div>
      </div>
  </main>
</template>

<style scoped>
  /* Pegá aquí los estilos específicos del hero y los productos */
  .hero { height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: linear-gradient(rgba(11, 19, 17, 0.7), var(--bg-principal)), url('https://humanidades.com/wp-content/uploads/2017/03/selva-4-e1564611988457.jpg') center/cover; }
  .contenedor-productos { padding: 60px 8%; }
  .grid-productos { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
  .tarjeta-animal { background-color: var(--bg-tarjetas); border-radius: 15px; overflow: hidden; }
  .imagen-animal { width: 100%; height: 230px; object-fit: cover; }
  .info-animal { padding: 25px; }
</style>