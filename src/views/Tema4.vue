<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Pegantes, sellantes, embalaje y empaque
    .row.justify-content-center.mb-5
      .col-lg-4.col-10.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/1.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p Los pegantes sellantes y selladores determinan en gran medida la correcta función del producto, las acciones de embalaje y empaque de los prototipos o productos mobiliarios.
        .cajon.color-secundario(style="background-color: #f6f6f6 ").p-4.mb-4
          p Como se ha visto es importante aplicar sellantes a las maderas que se utilizarán en ambientes exteriores y que se encontrarán expuestas a condiciones ambientales, qué  eventual y comparativamente reducirán el tiempo de vida útil del producto, respecto a los elaborados de usos de interiores. 
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Selladores
    p.mb-5(data-aos='fade-right') A continuación, se examinarán un poco más las consideraciones, composición y cuidado general que se debe tener cuando se utiliza un sellador en un producto mobiliario de madera. La información presentada se basa en lo presentado por la Fundación Suyana, (2017).
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema4/2.png', alt='')
      .col-lg-8
        .acordion-diferente
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azulada")
            div(titulo="Composición")
              p Los selladores de madera normalmente se encuentran en el mercado en composiciones a base de nitrocelulosa y en presentaciones que van desde un octavo de galón hasta toneles de 200 litros. 
            div(titulo="Características y propiedades")
              p La composición, gracias a la nitrocelulosa ofrece características y propiedades de las resinas sintéticas plastificantes. 
            div(titulo="Sellado de poros en superficies")
              p Los selladores se utilizan en piezas o maderas sin curar con el objetivo de sellar poros en la superficie; es ideal en la aplicación de estos en aglomerados, muebles para exteriores e interiores composiciones ornamentales y todo tipo de producto fabricado a partir de madera. 
            div(titulo="Ahorro")
              p La aplicación y ventajas de aplicar este tipo de producto en la madera radica principalmente en el ahorro de pintura o barniz de acabado. 
            div(titulo="Nivelación ")
              p En la nivelación de la superficie puede ser utilizado como acabado superficial en productos que no son expuestos a la superficie. 
            div(titulo="Precauciones")
              p Se deben tener precauciones al momento de llevar a cabo su aplicación, pues la mayoría de los selladores son inflamables y tóxicos. 
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Como ejemplo de selladores comerciales; el azul de la izquierda es de tono neutro y el rojo de la derecha de coloración madera, ambos utilizados para impermeabilizar la misma.
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Sellantes
    p.mb-5(data-aos='fade-right') Otros productos que muy utilizados en la producción de mobiliario de madera son los sellantes; estos normalmente se encuentran en el mercado con la presentación de siliconas utilizadas para la unión de partes ya sea entre maderas o entre estas y otros materiales. 
      br
      br
      | Los sellantes son productos que cumplen su función, en la medida que se utilizan de forma correcta:
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/4.png', alt='')
      .col-lg-8
        SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.p-4(style="background-color: #e1e4e9").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/5.svg' alt='AvatarTop')
            p.text-center Las juntas o uniones.
          .tarjeta.p-4(style="background-color: #e1e4e9").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/5.svg' alt='AvatarTop')
            p.text-center Para impedir el paso de líquidos.
          .tarjeta.p-4(style="background-color: #e1e4e9").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/5.svg' alt='AvatarTop')
            p.text-center Aislar el polvo.
          .tarjeta.p-4(style="background-color: #e1e4e9").h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/5.svg' alt='AvatarTop')
            p.text-center Aumentar la cohesión entre partes de diferentes materiales.
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-derecha
          .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/6.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Los sellantes o siliconas se utilizan para la fijación o unión de partes o piezas y también para aislar secciones de productos mobiliarios de polvo o líquidos.
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Pegantes
    .row.justify-content-center.aling-items-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/7.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Los sellantes también se pueden utilizar con fines de pegado como se vio anteriormente, sin embargo, el pegante tipo madera o acetato de polivinilo ofrece mejores resultados en la madera.
          br
          br
          | Para la aplicación del pegante, se deben tener en cuenta las siguientes recomendaciones:
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta(style="background-color: #f3f9ff ").p-5
          img(src='@/assets/curso/temas/tema4/8.svg', alt='').m-auto.mb-3
          .text-center
            h5 Superficies sin curar
            p Al igual que las siliconas debe ser aplicado en superficies sin curar o sellar de tal manera que penetre las porosidades de ambas partes y aumente la fuerza de cohesión.
      .col-lg-4
        .tarjeta(style="background-color: #f3f9ff ").p-5.h-100
          img(src='@/assets/curso/temas/tema4/9.svg', alt='').m-auto.mb-3
          .text-center
            h5 Secado
            p Se recomienda dejar secar el pegante mediante la aplicación de fuerza con prensas o sargentas.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta(style="background-color: #e3f2fd ").p-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-0 La utilización de prensas o sargentas en la unión de piezas mediante pegantes garantiza mejores resultados en el prototipo o producto final.
            .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/10.png', alt='')
    .titulo-cuadro.d-flex
      i.fas.fa-square(style="color: #3bc192").me-3
      h4 Embalaje
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema4/11.png', alt='')
      .col-lg-7
        p Una vez revisados los pegantes y sellantes y sus resultados en las piezas que conforman un prototipo o producto, es importante tener en cuenta la operación de embalaje del prototipo o producto terminado; esta corresponde a la manera en la cual desde la producción el operario, diseñador, carpintero o ebanista, protege, recubre y separa el producto final o las piezas que lo conforman, para luego ser empacado en un contenedor, caja o similar, que será la manera en la cual lo recibirá un distribuidor o cliente final. Estas operaciones son importantes ya que un adecuado embalaje garantiza la integridad del producto hasta su destino final.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #e3f2fd ").p-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-4.col-10: img(src='@/assets/curso/temas/tema4/12.png', alt='')
            .col-lg-8
              p.mb-0 El empaque, aunque no haga parte del producto final, corresponde a la primera impresión o contacto que tendrá el cliente con el producto antes de utilizarlo; es por esto por lo que su diseño juega un papel importante al momento de pensar en la construcción y terminación de un producto.



</template>

<script>
export default {
  name: 'Tema4',
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
