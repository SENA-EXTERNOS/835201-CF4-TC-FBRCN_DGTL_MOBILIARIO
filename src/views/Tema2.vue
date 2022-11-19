<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Identificación y manejo de herramientas
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Las herramientas constituyen uno de elementos más importantes en cualquier espacio de trabajo o taller de producción de mobiliario; existen herramientas altamente sofisticadas como las máquinas de control numérico computacional CNC, que realizan muchos trabajos de corte, acabado, pintura, lijado y cepillado de manera automática y con altos niveles de calidad. Por ende, es importante que el diseñador conozca que este tipo de herramientas se implementan cada vez más en los procesos de diseño y fabricación de mobiliarios debido a la practicidad y disminución de costos y tiempo de fabricación, (Fundación Suyana, 2017).
          br
          br
          |#[b En este componente formativo se revisarán las herramientas más utilizadas en los procesos de fabricación de mobiliario de madera, esto teniendo en cuenta que en la fabricación de los mismos es posible combinar o contar con elementos o piezas en materiales metálicos y plásticos; los cuales en muchas ocasiones.]
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las herramientas y el correcto manejo de estas en el espacio de taller de producción de mobiliario facilitan y agilizan las tareas sobre piezas a producirse, la destreza del manejo de las mismas influye directamente en la calidad del producto final.
    p.mb-5(data-aos='fade-right') Las herramientas para la producción de mobiliarios se dividen de acuerdo con varios elementos como lo son.
    .row.justify-content-center.mb-5
      .col-lg-4
        .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/3.jpg", alt="alt")
            .crd_hover_txt--body.w-100
              h4.mb-3.text-center Tipo de herramienta

              p.mb-0.text-center  Para la producción de mobiliarios, las herramientas se dividen en: 
                br
                br
                |● Eléctricas 
                br
                |● Manuales
                br
                |● Neumáticas
      .col-lg-4
        .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/4.jpg", alt="alt")
            .crd_hover_txt--body.w-100
              h4.mb-3.text-center Según su función
              p.mb-0.text-center Los tipos de herramientas a su vez se dividen en función del uso en herramientas de: 
                br 
                br
                | ● Corte
                br
                |● Desbaste
                br
                |● Perforación 
      .col-lg-4
        .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/5.jpg", alt="alt")
            .crd_hover_txt--body.w-100
              h4.mb-3.text-center Otras herramientas útiles
              p.mb-0.text-center Estas pueden ser manuales o digitales, utilizadas para labores precisas:
                br
                br
                | ● Herramientas de marcación. 
                br
                |● Herramientas de medición. 
                br
                |● Herramientas de sujeción.
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Herramientas de medición, marcación y sujeción
    p.mb-5(data-aos='fade-right') Las herramientas de medición, marcación y sujeción se presentan a continuación.
    TabsC.color-primario.mb-5
      .py-4.py-md-5.bg-pestanas(titulo="Herramientas de marcación")
        .row.justify-content-between.align-item-center.px-3
          .col-md-6.mb-4.mb-md-0
            p Estas son de las más conocidas incluso por fuera del campo de la carpintería. Dentro de estas se encuentran lápices y en ocasiones marcadores, vistos todos en los componentes anteriores. 
              br
              br
              |Existen herramientas de marcación tipo láser que se utilizan para agilizar y mejorar la precisión en la señalización de secciones. El marcador o nivel láser permite utilizar el destello de luz para hacer marcaciones precisas y cortes exactos sobre piezas y partes del producto de manera proyectada en secciones largas y cortas. 
          .col-5: img(src='@/assets/curso/temas/tema2/6.png', alt='')
      .py-4.py-md-5.bg-pestanas(titulo="Herramientas de medición")
        .row.justify-content-between.align-item-center.px-3
          .col-md-6.mb-4.mb-md-0
            p Estas son muy conocidas; dentro de las de medición encontramos las escuadras, reglas, metro, flexómetro y transportadores.
              br
              br
              |Existen herramientas de medición digitales que permiten gran precisión; entre estas los flexómetros, metros o medidores digitales permiten medir longitudes y separaciones hasta con tres décimas de exactitud.
          .col-5: img(src='@/assets/curso/temas/tema2/7.png', alt='')
      .py-4.py-md-5.bg-pestanas(titulo="Herramientas de sujeción")
        .row.justify-content-between.align-item-center.px-3
          .col-md-6.mb-4.mb-md-0
            p Como su nombre lo indica son herramientas de apoyo a la labor del diseñador, ebanista o carpintero que permiten sujetar y asegurar el material para operaciones de corte y perforado de piezas o secciones de piezas; esto para prevenir el movimiento brusco de éstas y garantizando la firmeza requerida para la obtención de un corte preciso o una perforación adecuada. 
              br
              br
              |Estos también se utilizan en los procesos de ensamble final, donde se usan pegantes, los cuales generalmente requieren un tiempo de secado o curado con la aplicación de una fuerza de presión constante. 
              br
              br
              |Dentro de este tipo de herramientas se encuentran:
            ul.lista-ul
              li
                i.fas.fa-circle.fa-xs
                p.mb-0 #[b Sargenta o sargento:] la longitud para el área de fijación varía en distintos tamaños, son móviles y se pueden encontrar en materiales plásticos o metálicos; normalmente se utilizan para fijación de piezas con pegantes y sujeción de piezas para perforaciones.
              li
                i.fas.fa-circle.fa-xs
                p.mb-0 #[b Prensa tipo gancho:] son utilizadas en piezas pequeñas, la abertura para el área de presión es más pequeña que las sargentas.
              li
                i.fas.fa-circle.fa-xs
                p.mb-0 #[b Prensa de banco:] son prensas fijas que brindan gran fuerza de sujeción, se utilizan para operaciones de corte y de perforación y su fabricación es en hierro.
          .col-5: img(src='@/assets/curso/temas/tema2/8.png', alt='')
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Herramientas de corte, perforación, lijado y desbaste
    p.mb-5(data-aos='fade-right') La siguiente infografía contiene algunas de las herramientas más usadas de corte, perforación, lijado y desbaste.
    //TODO anadir componente modal click 
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/info1.svg', alt='Texto que describa la imagen')
          div(x="37%" y="37.5%" tooltip="Abir modal" numero="")
            h4.mb-2.text-center Herramientas de corte
            .row.justify-content-center.mb-5
              .col-lg-4
                h5.text-center Herramientas manuales
                img(src='@/assets/curso/temas/tema2/i1.png', alt='').m-auto
              .col-lg-8
                h5.text-center Herramientas eléctricas
                img(src='@/assets/curso/temas/tema2/i2.png', alt='').m-auto
          div(x="85%" y="37.5%" tooltip="Abir modal" numero="")
            h4.mb-2.text-center Herramientas de perforación
            .row.justify-content-center.mb-5
              .col-lg-4
                h5.text-center Herramientas manuales
                img(src='@/assets/curso/temas/tema2/i3.png', alt='').m-auto
              .col-lg-8
                h5.text-center Herramientas eléctricas/ neumáticas
                img(src='@/assets/curso/temas/tema2/i4.png', alt='').m-auto
          div(x="42%" y="72.5%" tooltip="Abir modal" numero="")
            h4.mb-2.text-center Herramientas de lijado y desbaste 
            .row.justify-content-center.mb-5
              .col-lg-4
                h5.text-center Herramientas manuales
                img(src='@/assets/curso/temas/tema2/i5.png', alt='').m-auto
              .col-lg-8
                h5.text-center Herramientas eléctricas
                img(src='@/assets/curso/temas/tema2/i6.png', alt='').m-auto
          div(x="85%" y="72.5%" tooltip="Abir modal" numero="")
            h4.mb-2.text-center Herramientas CNC
            .row.justify-content-center.mb-5
              .col-lg-10
                h5.text-center
                img(src='@/assets/curso/temas/tema2/i7.png', alt='').m-auto
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Mantenimiento básico de equipos para la producción
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/9.png', alt='')
      .col-lg-8 
        p La adquisición de herramientas representa un componente y esfuerzo económico o financiero por parte del diseñador, carpintero o ebanista; en este sentido, el correcto y adecuado mantenimiento de éstas permite condiciones de trabajo cómodas y seguras, estos cuidados ayudan además a la conservación de la inversión realizada.
        .cajon.color-primario(style="background-color: #e2e5ea").p-4.mb-4
          p.mb-0 En cualquiera de los procesos productivos que se llevan a cabo en el ámbito industrial el uso e implementación de herramientas conlleva al mantenimiento de estas. El adecuado mantenimiento de estos activos prolonga su tiempo de vida útil y valoriza la inversión efectuada por el diseñador, carpintero, ebanista u organización. Para la aplicación o ejecución del mantenimiento se deben tener en cuenta los tipos de herramientas, las cuales como se vio anteriormente pueden dividirse en manuales, eléctricas y neumáticas. 
    p.mb-5(data-aos='fade-right') Es importante identificar las dos principales filosofías de mantenimiento.
    .row.justify-content-center.mb-5
      .col-lg-4
        .crd_hover2_txt.rounded-3(data-aos="flip-left")
          .crd_hover2_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/10.jpg", alt="alt")
          .crd_hover2_txt--body.w-100.text-white
            h4.mb-3.text-center Mantenimiento preventivo 

            p.mb-0.text-center Puede ser definido como una lista completa de actividades, todas ellas realizadas por usuarios, operadores y agentes especializados para asegurar el correcto funcionamiento de la planta, edificios, máquinas, equipos, vehículos, etc. (Mantenimiento Planificado. s/f).
      .col-lg-4
        .crd_hover2_txt.rounded-3(data-aos="flip-left")
          .crd_hover2_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/11.jpg", alt="alt")
          .crd_hover2_txt--body.w-100.text-white
            h4.mb-3.text-center Mantenimiento correctivo

            p.mb-0.text-center Este tipo de mantenimiento se enfoca en la corrección de las averías o fallas de los equipos cuando se presentan. La reparación es habitual tras averías que obligan a detener la instalación o máquina afectada por el fallo. (García.2009).
    .row.justify-content-center.mb-5
      .col-lg-8
        div(style="background-color: #e3f1fc ").p-3.d-flex.align-items-center
          img(src='@/assets/curso/temas/tema2/12.svg', alt='' style="width: 129px").me-3
          p.mb-0 Con base en lo anterior es ideal implementar prácticas de mantenimiento preventivo sobre las herramientas y/o máquinas que se utilizan en los procesos de fabricación y prototipado de mobiliario.
    p.mb-5(data-aos='fade-right') En relación con las prácticas de mantenimiento, se deben tener en cuenta las siguientes observaciones:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Material particulado")
            p El factor que más influye o afecta la operación normal de las herramientas para la producción de mobiliario es el polvo o material particulado (viruta) desprendido de la madera procesada. En este caso en particular, la limpieza continua y lubricación con aceites sintéticos, es fundamental.
          div(titulo="Roce entre componentes")
            p En maquinaria o herramientas de rotación como prensas, sierras, etc. el roce continuo entre sus componentes requiere limpieza y lubricación constante; a esta práctica se le denomina tribología.
          div(titulo="Para las herramientas de corte")
            p En el caso de estas herramientas tanto eléctricas como manuales es importante tener en cuenta que los componentes son fabricados en acero y están sujetos a oxidación y pérdida de filo, la verificación del estado de estos es fundamental para la preservación de la herramienta completa. 
          div(titulo="Para las herramientas eléctricas")
            p Para estas los contactos de los cables internos son susceptibles a oxidación o daño por contaminación de material particulado y humedad.
          div(titulo="Para las herramientas neumáticas")
            p Para estas aplican las mismas consideraciones que aquellas encargadas del corte respecto a la lubricación e inspección en las juntas o uniones con la línea de aire para la prevención de fugas y pérdida de presión.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/13.png', alt='')
    p.mb-5(data-aos='fade-right') La siguiente infografía se presenta con base a la clasificación de herramientas presentada anteriormente; en esta se indica el tipo de práctica de mantenimiento preventivo más pertinente para la adecuada y correcta operación y prolongación de vida útil de las mismas.
    h3.text-center Acciones de mantenimiento recomendadas a herramientas de producción de mobiliario
    //TODO Añadir imagen infogra
    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/info2.png', alt='Texto que describa la imagen')
      div(x="11%" y="72%" tooltip="Abrir modal" numero="")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            p Aplicación de lubricación en ejes y piezas móviles, verificación de estado de los elementos de cortes como los dientes de la sierras, limpieza y remoción de viruta de corte.
          .col-lg-7.col-6: img(src='@/assets/curso/temas/tema2/in1.png', alt='')
      div(x="30.4%" y="28%" tooltip="Abrir modal" numero="")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            p Aplicación de lubricación en eje, verificación de estado brocas y/o extensores, limpieza y remoción de viruta producto de la perforación; en caso de neumáticos adicionalmente verificar acople a línea de aire.
          .col-lg-7.col-6: img(src='@/assets/curso/temas/tema2/in2.png', alt='')
      div(x="50%" y="72%" tooltip="Abrir modal" numero="")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            p Verificación y reemplazo de lijas, limpieza y remoción de virutas y polvo. Aplicación de lubricante en ejes y elementos rotacionales y de vibración.
          .col-lg-7.col-6: img(src='@/assets/curso/temas/tema2/in3.png', alt='')
      div(x="70%" y="28%" tooltip="Abrir modal" numero="")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            p En el caso los tornos aplicar las mismas acciones usadas con las herramientas de corte en limpieza y lubricación. En el caso de formones, verificar que las puntas estén lisas y afiladas.
          .col-lg-7.col-6: img(src='@/assets/curso/temas/tema2/in4.png', alt='')
      div(x="89%" y="72%" tooltip="Abrir modal" numero="")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            p Para herramientas de desbaste CNC el mantenimiento es asimilable al de las de corte y lijado, esto es; limpieza y lubricación de partes móviles y reemplazo de empaquetaduras y elementos de desbaste. La misma consideración aplica a las cortadoras láser a excepción del elemento de corte, que debe ser reemplazado o manipulado por personal experto.
          .col-lg-7.col-6: img(src='@/assets/curso/temas/tema2/in5.png', alt='')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Técnicas para acabados de mobiliarios en madera
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/14.svg', alt='') 
      .col-lg-10
        p.mb-0 Los acabados sobre las superficies de madera son actividades que se llevan a cabo en la última fase del proceso de fabricación de productos y prototipos de mobiliarios, esto con el fin de resaltar los atributos físicos de la madera o para generar o recrear otros. Existen diferentes tipos de técnicas que se pueden aplicar a las superficies de madera de los productos mobiliarios, cada una de estas varía según el grado de experiencia, innovación y muchos otros como la creatividad por parte del diseñador, carpintero o ebanista; sin embrago, en este capítulo se revisarán los más generales y populares.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-derecha
          .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/15.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Los acabados sobre las superficies de los mobiliarios en madera permiten trasmitir al cliente impresiones y sensaciones que pueden influir sobre la decisión de compra en función del gusto y ambiente que desee ocupar con el mobiliario.
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Materiales más usados para los acabados
    p.mb-5(data-aos='fade-right') Los materiales más usados para el proceso de los acabados y algunas de sus aplicaciones.
    TabsC.color-primario.mb-5
      .py-4.py-md-5.bg-pestanas(titulo="Masilla plástica para madera")
        .row.justify-content-between.align-item-center.px-3
          .col-md-6.mb-4.mb-md-0
            p En ocasiones al finalizar el proceso de ensamble pero antes de iniciar con la fase de acabados, es muy probable que se hayan generado grietas o daños sobre partes o secciones de las piezas del producto, estas afectaciones por lo general tienen cierta profundidad sobre la madera que de no ser debidamente tratadas ocasionan distorsión en la presentación final del producto; generando una mala percepción o sensación antiestética por parte del cliente, para estos casos, se utilizan las masillas plástica para madera. Estas masillas se aplican sobre las imperfecciones con espátulas o de manera manual con tiempos de secado entre los 15 y 30 minutos, las presentaciones en las que se pueden presentar de manera comercial son tonos de maderas claros y oscuros.
          .col-5: img(src='@/assets/curso/temas/tema2/16.png', alt='')
      .py-4.py-md-5.bg-pestanas(titulo="Lacas y esmaltes")
        .row.justify-content-between.align-item-center.px-3
          .col-md-6.mb-4.mb-md-0
            p Son otros tipos de recubrimientos que otorgan un acabado brillante a la superficie sobre la cual se aplica; su aplicación puede ser efectuada con brocha plana o pistola de aire a presión, luego de un tiempo de secado de 30 a 60 minutos, puede aplicarse mediante pulidora de paño y capas de brillado.
          .col-5: img(src='@/assets/curso/temas/tema2/17.png', alt='')
      .py-4.py-md-5.bg-pestanas(titulo="Barnices")
        .row.justify-content-between.align-item-center.px-3
          .col-md-6.mb-4.mb-md-0
            p Se utilizan con funcionalidades similares a las lacas, pero a diferencia de estas, los tiempos de secado pueden variar entre 8 y 12 horas.
          .col-5: img(src='@/assets/curso/temas/tema2/18.png', alt='')
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Técnicas más usadas para la aplicación de los acabados
    p.mb-5(data-aos='fade-right') Algunas de las técnicas más usadas son:
    .tarjeta(style="background-color: #e1e4e9 ").p-5
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Técnica de veteado: es uno de los tipos de falsos acabados que se aplican en los muebles o productos de carpintería de obra como puertas, ventanas y marcos, así como en objetos de artesanía, esto con el propósito de provocar la apariencia de haber sido construido en madera natural. La técnica consiste en dar la apariencia de vetas en un producto elaborado en aglomerado o incluso para acentuar las vetas de un producto de madera que no se perciben en la superficie. (Centro de Innovación Tecnológica de la madera, 2015).
              br
              br
              |Ejemplo de técnica de veteado sobre madera.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema2/19.png', alt='')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Técnica de envejecido: generalmente cuando algo es viejo muchas veces en vez de perder valor decorativo, lo gana. Una de las curiosas tendencias de la moda es el uso de muebles antiguos o el uso de la técnica de envejecimiento sobre muebles nuevos con el propósito de darle la apariencia de viejo. La técnica de acabado envejecido en madera natural busca dar la apariencia de viejo a un mueble recién fabricado. (Centro de Innovación Tecnológica de la madera, 2015).
              br
              br
              |Ejemplo de técnica de envejecido aplicado sobre producto mobiliario terminado.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema2/20.png', alt='')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Resinas epóxicas: mediante el uso de resinas epóxicas es posible conseguir acabados llamativos e interesantes mediante la combinación de diferentes materiales con la madera.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema2/21.png', alt='')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Ejemplo de proceso con resina: proceso de vertimiento de resinas y el efecto que produce sobre la pieza, prototipo o producto terminado.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema2/22.png', alt='')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Ejemplo de proceso con resina: proceso de vertimiento de resinas y el efecto que produce sobre la pieza, prototipo o producto terminado.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema2/23.png', alt='')


</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  &:hover
    .crd_hover_txt--body
      transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
      transform: translateY(0)

  .crd_hover_txt--body
    position: absolute
    padding: 1.5rem
    bottom: 0
    transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
    transform: translateY(calc( 100% - 3.85rem ))
    background-color: rgba(#d0f2d7, .9)
.crd_hover2_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  &:hover
    .crd_hover2_txt--body
      transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
      transform: translateY(0)

  .crd_hover2_txt--body
    position: absolute
    padding: 1.5rem
    bottom: 0
    transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
    transform: translateY(calc( 100% - 3.85rem ))
    background-color: rgba(#3D5075, .9)
</style>
