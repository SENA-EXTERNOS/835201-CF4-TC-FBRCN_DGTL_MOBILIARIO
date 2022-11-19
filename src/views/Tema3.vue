<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de uniones
    .row.justify-content-center.mb-5
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.png', alt='')
      .col-lg-7
        p La calidad y apariencia final a ojos de un cliente de las uniones entre piezas y partes de un producto mobiliario determina en gran medida la percepción de un atributo de alta o baja calidad sobre el mismo.
        .cajon.color-acento-contenido(style="background-color: #f3eeeb ").p-4.mb-4
          p.mb-0 Hasta el momento se han revisado en los componentes formativos previos y temáticas desarrolladas las uniones que se pueden llevar a cabo mediante fijación mecánica; está utilizando pernos, tornillos o remaches. Los mobiliarios en madera gracias a la naturaleza de la materia prima permiten que a través de este tipo de elementos normalmente fabricados en aluminio, acero o latón presenten acciones de ensamble mediante uniones para que se lleven a cabo de manera cómoda, rápida y con elementos básicos como destornilladores.
        p En el siguiente video se muestra en qué consiste el tipo de unión angular, que se llevan a cabo sobre piezas de madera para lograr acoples o ensambles,  sin la necesidad de usar elementos mecánicos. 1la manera en la cual la aplicabilidad de esta técnica otorga un valor agregado al producto final, esto en la medida en que, al no observarse este tipo de uniones, la percepción de calidad y acabado fino permiten influenciar la determinación de compra final del cliente.
    figure
      .videos
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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
