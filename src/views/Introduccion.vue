<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .tarjeta.fondo-intro.p-5.mb-5 
      .row.justify-content-center.align-items-center.my-5
        .col-lg-6
          p Bienvenido a este recurso educativo, en el desarrollo de este componente formativo sobre Fabricación Digital de Mobiliario se revisarán las consideraciones más importantes relativas a la preparación inicial de ideas y conceptos, realizando estimaciones de costos, mercados y demás. Una de las fases más importantes, por ejemplo, es la de la fabricación del prototipo o producto que inicia como bosquejo o idea. Se verá además cómo, a partir del proceso de diseño empleado y dependiendo del alcance de herramientas manuales, eléctricas o computacionales que se utilicen, es posible llevar a cabo la materialización de diseños digitales en productos mobiliarios físicos, principalmente en madera y la forma de aplicar las normas generales de seguridad en el espacio de trabajo; lo anterior, incluye la identificación de los tipos de residuos que salen en producción y la correcta disposición de los mismos, esto teniendo en cuenta cómo el empaque y embalaje propician que el ambiente y espacio de trabajo sean óptimos para la producción y se reflejen, en últimas, en el prototipo y productos desarrollados. En el siguiente video conocerá los referentes que hacen parte de la etapa.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/intro.png', alt='')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.fondo-intro
  background-image: url(../assets/curso/temas/fondo-intro.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
