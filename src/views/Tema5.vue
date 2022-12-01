<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normas de seguridad en el espacio de trabajo
    p.mb-5(data-aos='fade-right') Es fundamental tener en cuenta las normas de seguridad en el espacio de trabajo, dentro de estas se deben considerar diferentes elementos.
    .tarjeta(style="background-color: #e1e4e9 ").p-5.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La seguridad en el trabajo en el proceso de diseño y producción de mobiliario al igual que en cualquier otro campo de la producción, está dada por una serie de criterios y consideraciones orientadas a mantener la integridad física y mental del trabajador y de quienes intervienen en cualquier actividad del proceso productivo. 
          .col-md-6.col-10: img(src='@/assets/curso/temas/tema5/1.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La seguridad en los espacios de trabajo como el taller o laboratorio de producción debe estar dada principalmente por la conciencia situacional de quienes laboran en el lugar.
          .col-md-6.col-10: img(src='@/assets/curso/temas/tema5/2.png', alt='')
    p.mb-5(data-aos='fade-right') Las normas de seguridad en el espacio de trabajo se dan bajo varios parámetros.
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta(style="background-color: #e3f1fc ").p-5.h-100.box-s
          img(src='@/assets/curso/temas/tema5/3.png', alt='').m-auto.mb-3
          .text-center
            h5 Elementos de protección
            p El uso correcto y adecuado de los elementos de protección personal.
      .col-lg-4
        .tarjeta(style="background-color: #e3f1fc ").p-5.h-100.box-s
          img(src='@/assets/curso/temas/tema5/4.png', alt='').m-auto.mb-3
          .text-center
            h5 Medidas y condiciones
            p En esta índole los elementos locativos deben ser los idóneas para adelantar o llevar cabo las tareas y actividades que se requieran.
    p.mb-5(data-aos='fade-right') Las medidas y condiciones locativas mínimas para el espacio de trabajo son:
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #f3f9ff").p-5
              p.text-center Luz
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/6.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #f3f9ff").p-5
              p.text-center Ventilación
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Luz" :icono="require('@/assets/curso/temas/tema5/7.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Tanto la luz y como la ventilación hacen parte del conjunto de elementos locativos mínimos para la seguridad en el trabajo, así como la electricidad. 
              br
              br
              |En este caso en particular y como se indicó en el desarrollo del tema de herramientas, es indispensable que la red cumpla con los criterios establecidos por las normas de construcción para la prevención de cortos circuitos que puedan generar incendios, daños o mal funcionamiento en las herramientas o equipos operados por las personas.
            .cajon.color-secundario(style="background-color: #e3f2fd").p-4.mb-4
              p.mb-0 La iluminación juega un papel importante en la medida en que al existir maquinaria de corte siempre debe garantizarse la cantidad de luz necesaria que le permita al operario tener contacto visual con la parte o sección en proceso de corte y sus manos.
          .col-md-6: img(src='@/assets/curso/temas/tema5/9.png', alt='')
      .py-4.py-md-5(titulo="Ventilación" :icono="require('@/assets/curso/temas/tema5/8.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Como medida o condición óptima en un espacio de trabajo de producción de mobiliario, en este debe estar garantizada la ventilación constante dado que permanentemente se generan residuos y material particulado que afecta las vías respiratorias de quienes se encuentran en estos lugares.
            .cajon.color-secundario(style="background-color: #e3f2fd").p-4.mb-4
              p.mb-0 Prevención de incendios: en todos los casos independientemente el tipo de espacio de trabajo, taller o laboratorio debe existir mínimo un extintor multipropósito con el fin de sofocar cualquier inicio de incendio, hay que recordar, como se observó en el tema de sellantes y selladores que existen productos que son inflamables y que eventualmente pueden ocasionar una conflagración.
          .col-md-6: img(src='@/assets/curso/temas/tema5/10.png', alt='')
    .row.justify-content-center.mb-2
      .col-lg-10
        .tarjeta.p-4.p-md-5.mb-5(style="background-color: #ebedf1")
          .row.justify-content-around.align-items-center
            .col-6.col-sm-6.col-md-4.mb-4.mb-md-0
              img(src="@/assets/curso/temas/tema5/11.svg")
            .col-md.col-lg-6
              p.mb-4 Se recomienda la revisión del decreto 1072 de 2015, el cual se regula desde el Sistema de Gestión de Seguridad y Salud en el Trabajo en Colombia y éste es de obligatorio cumplimiento y todas las empresas sin importar su naturaleza o tamaño, deben implementarlo. En este se definen los lineamientos y consideraciones necesarias para garantizar la salud en integridad de los trabajadores en sus espacios de actividades .
              .tarjeta.bg-white.d-flex.p-3.justify-content-between.align-items-center
                h5.mb-0 Decreto 1072 de 2015
                a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173" target="_blank" type="application/pdf")
                  span Enlace
                  i.fas.fa-link
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones(style="background-color: #f1fcf3").p-4.mb-4
          p.mb-0 Es importante explorar los demás recursos que se encuentran disponibles en el presente componente formativo; para hacerlo en el menú principal se encontrará una síntesis, una actividad didáctica y material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema5',
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
