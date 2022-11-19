<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producción y espacio de trabajo de mobiliario de madera
    .row.justify-content-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.png', alt='')
      .col-lg-9(data-aos="fade-left") 
        p El espacio de trabajo para la producción de mobiliario normalmente se define como taller, en algunos casos de organizaciones o empresas robustas o más desarrolladas se cuenta con espacio para el prototipado denominado laboratorio.
          br
          br
          | En los talleres convencionales es común encontrar todo tipo de elementos.
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta(style="background-color: #F3F9FF ").p-5
          img(src='@/assets/curso/temas/tema1/2.svg', alt='' style="width: 200px").m-auto.mb-3
          h4.text-center Herramientas manuales
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta(style="background-color: #F3F9FF ").p-5
          img(src='@/assets/curso/temas/tema1/3.svg', alt='' style="width: 200px").m-auto.mb-3
          h4.text-center Herramientas eléctricas
      .col-lg-3
        .tarjeta(style="background-color: #F3F9FF ").p-5
          img(src='@/assets/curso/temas/tema1/4.svg', alt='' style="width: 200px").m-auto.mb-3
          h4.text-center Herramientas artesanales
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #F3EEEB ")
          p Se puede usar dos o más columnas para diagramar el texto








</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
