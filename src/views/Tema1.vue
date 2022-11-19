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
          p Las herramientas artesanales son elaboradas a partir de las necesidades particulares del diseñador, carpintero o ebanista. En cualquiera de los casos que corresponda ya sea a un taller o un laboratorio, existen ciertas condiciones o consideraciones que se deben tener en cuenta, a continuación, se encuentran algunas de ellas.
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Espacio o mesa de trabajo plana
    p.mb-5(data-aos='fade-right') Algunas características sobre el espacio o mesa de trabajo.
    .row.justify-content-center.mb-5
      .col-lg-10 
        PasosA.color-primario.mb-5(tipo="n")
          .row(titulo="").justify-content-between.align-items-center 
            .col-md-6.mb-4.mb-md-0
              p Corresponde a la primera fase o componente de un taller.
            .col-md-5: img(src='@/assets/curso/temas/tema1/5.png', alt='')
          .row(titulo="").justify-content-between.align-items-center 
            .col-md-5: img(src='@/assets/curso/temas/tema1/6.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p En la mesa de trabajo el diseñador, ebanista o carpintero revisa los diseños, planimetría o utiliza dispositivos electrónicos como computadores o tabletas para visualización o revisión de documentos, este espacio o mesa plana puede ser un escritorio.
          .row(titulo="").justify-content-between.align-items-center 
            .col-md-6.mb-4.mb-md-0
              p Es importante que la superficie que compone este espacio sea lo más lisa posible y sin imperfecciones, ya que estos pueden ocasionar la rotura del plano o documento sobre el cual el diseñador, carpintero o ebanista esté trabajando.
            .col-md-5: img(src='@/assets/curso/temas/tema1/7.png', alt='')
          .row(titulo="").justify-content-between.align-items-center 
            .col-md-5: img(src='@/assets/curso/temas/tema1/8.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p Durante la producción o elaboración de prototipo el diseñador, carpintero o ebanista está sujeto a la toma de notas y anotación de tareas.
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Líneas eléctricas
    p.mb-5(data-aos='fade-right') Algunas observaciones sobre las líneas eléctricas.
    .tarjeta.p-4(style="background-color: #f1fcf3").mb-5
      LineaTiempoC.color-priamario(text-small)
        .row(titulo="Paso 1").align-items-center
          .col-md-7.mb-4.mb-md-0
            p Los talleres de producción de mobiliario a diferencia de las casas o residencias personales por lo general cuentan con líneas de 220 voltios, tanto bifásicas como trifásicas en algunos casos, esto ya que existen herramientas eléctricas que demandan este tipo de configuración.
          .col-md-5.col-6: img(src='@/assets/curso/temas/tema1/9.png', alt='')
        .row(titulo="Paso 2").align-items-center
          .col-md-7.mb-4.mb-md-0
            p Por lo general y más recomendable para efectos de practicidad, seguridad y accesibilidad, las líneas de 110 voltios como las casas, van en una altura no superior a los 50 cm en las paredes, respecto al piso.
          .col-md-5.col-6: img(src='@/assets/curso/temas/tema1/10.png', alt='')
        .row(titulo="Paso 3").align-items-center
          .col-md-7.mb-4.mb-md-0
            p Es recomendable utilizar este tipo de tomas eléctricas en las patas de mesas o bancos de trabajo con el objetivo de minimizar la posibilidad de obstrucción o accidentes con los cables de herramientas eléctricas que se conectan a tomas eléctricas.
          .col-md-5.col-6: img(src='@/assets/curso/temas/tema1/11.png', alt='')
        .row(titulo="Paso 4").align-items-center
          .col-md-7.mb-4.mb-md-0
            p También es posible encontrar ye idealmente disponer de rieles aéreos sobre las estaciones o mesas de trabajo; teniendo acceso a tomas de energía eléctrica tanto de 110 o 220 voltios ya que estas permiten la instalación y puesta en marcha de maquinaria rápidamente. 
          .col-md-5.col-6: img(src='@/assets/curso/temas/tema1/12.png', alt='')
        .row(titulo="Paso 5").align-items-center
          .col-md-7.mb-4.mb-md-0
            p De manera aérea también se encuentran las líneas neumáticas, tanto para la absorción y extracción de la viruta o material particulado producto de la madera de corte, como de la alimentación de aire comprimido para compresores de zona de pintura o herramientas de funcionamiento a partir de aire a presión.
          .col-md-5.col-6: img(src='@/assets/curso/temas/tema1/13.png', alt='')
        .row(titulo="Paso 6").align-items-center
          .col-md-7.mb-4.mb-md-0
            p En esta imagen se aprecia la disposición aérea de las líneas eléctricas en un taller o espacio de trabajo de producción mobiliario de madera, es posible apreciar que el área de trabajo sobre las mesas y el suelo se encuentra libre de obstrucción de cables eléctricos, condición que facilita las condiciones de trabajo.
          .col-md-5.col-6: img(src='@/assets/curso/temas/tema1/14.png', alt='')
        .row(titulo="Paso 7").align-items-center
          .col-md-7.mb-4.mb-md-0
            p Por otro lado, en esta imagen se puede observar un ducto neumático de extracción de viruta y polvo dispuesto de manera aérea, el cual absorbe los residuos producidos en el trabajo sobre piezas de madera y los conduce a un recipiente colector.
          .col-md-5.col-6: img(src='@/assets/curso/temas/tema1/15.png', alt='')
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Área de cortes
    p.mb-5(data-aos='fade-right')  A continuación, se presentan algunas características del área de corte.
    .row.justify-content-center.mb-5
      .col-lg-8
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Paso 1")
              .col-lg-7
                p El área o zona de cortes es uno de los componentes más críticos y peligros de cualquier espacio de trabajo, taller o laboratorio para la producción de mobiliarios pues a menos de que se utilicen cortadoras de control numérico computacional CNC las tareas de corte se llevan a cabo a través de herramientas manuales o eléctricas, las cuales representan un peligro latente siempre que son utilizadas.
              .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/16.png', alt='')
            .row(numero="2" titulo="Paso 2")
              .col-lg-7
                p La zona de corte por ende debe estar alejada de las demás preferiblemente, ya que además del peligro asociado en la operación de herramientas de producir mutilaciones sobre el operador, produce en el caso de la madera una gran cantidad de viruta y polvo, las cuales pueden contaminar otras áreas como la de pintura o acabados, perjudicando la calidad final del producto o prototipo.
              .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/17.png', alt='')
            .row(numero="3" titulo="Paso 3")
              .col-lg-7
                p Generalmente y por comodidad, el área de cortes en general se encuentra más cerca del espacio de la mesa de trabajo plana.
              .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/18.png', alt='')
            .row(numero="4" titulo="Paso 4")
              .col-lg-7
                p En la imagen se puede observar una sierra circular de banco utilizada para el corte de secciones de vigas o piezas robustas de madera u otras materias primas como plásticos.
              .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/19.png', alt='')
            .row(numero="5" titulo="Paso 5")
              .col-lg-7
                p La imagen muestra un torno, una de las herramientas más utilizadas en los talleres de carpintería y ebanistería, aquí no se lleva a cabo un proceso de corte específicamente si no un proceso de desbaste por rotación, en el cual, mediante la guía y manejo del operador por medio de formones o cinceles, se moldean piezas cilíndricas.
              .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/20.png', alt='')
            .row(numero="6" titulo="Paso 6")
              .col-lg-7
                p La imagen muestra una máquina de cepillado eléctrico, esta se encarga de suavizar las piezas y quitar las asperezas o fragmentos de material que sobresalen de un proceso de corte mediante la aplicación de lijas en movimiento. 
              .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/21.png', alt='')
            .row(numero="7" titulo="Paso 7")
              .col-lg-7
                p Por comodidad y orden generalmente tanto los tornos como las máquinas de lijado están dispuestas cerca al área de corte para aprovechar las líneas neumáticas de extracción de viruta.
              .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/22.png', alt='')
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Área de pintura y acabados
    p.mb-5(data-aos='fade-right') Algunos aspectos del área de pintura y acabados.
    TabsA.color-secundario.mb-5
      .tarjeta.p-4(titulo="Paso " style="background-color: #e3f2fd ")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p El área de pintura y acabados es la última de las fases de un proceso de producción de mobiliario.
          .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/23.png', alt='')
      .tarjeta.p-4(titulo="Paso " style="background-color: #e3f2fd ")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Aquí una vez es construido o ensamblado el producto y en función del tipo o configuración, ya sea de una sola pieza o de varios materiales, a estos les son aplicados los recubrimientos que, en el caso de la madera y los metales, protegen, recubren y embellecen el producto o prototipo. 
          .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/24.png', alt='')
      .tarjeta.p-4(titulo="Paso " style="background-color: #e3f2fd ")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Dado que la aplicación de recubrimientos, pinturas o esmaltes es una actividad susceptible a la contaminación, las zonas o área destinadas para este proceso deben estar debidamente aisladas de las de corte o lijado para prevenir que partículas o polvo se adhieran al producto revestido; esto sin importar que el procedimiento empleado sea manual con brocha o pistola neumática o de manera automatizada.
          .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/25.png', alt='')
      .tarjeta.p-4(titulo="Paso " style="background-color: #e3f2fd ")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Sin importar si el procedimiento es manual con brocha o con pistola neumático, o automatizado mediante brazos robóticos; el área de pintura y acabados debe ser aislada y libre de impurezas que requieran posteriormente revertir el proceso de pintura, aumentando los costos y ralentizando la producción.
          .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/26.png', alt='')

      






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
