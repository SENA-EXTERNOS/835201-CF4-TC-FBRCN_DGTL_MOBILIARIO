export default {
  global: {
    componenteFormativo:
      'Elementos, herramientas y normas de seguridad en producción',
    descripcionCurso:
      'Este componente sintetiza el conjunto de saberes que configuran la propuesta inicial del diseño de un producto mobiliario bajo los requerimientos y necesidades de un cliente y hasta el momento de la producción, llegando a abarcar desde las generalidades del embalaje o empaque hasta las normas generales de seguridad en el espacio de trabajo y la disposición de residuos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción y espacio de trabajo de mobiliario de madera',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación y manejo de herramientas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Mantenimiento básico de equipos para la producción ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas para acabados de mobiliarios en madera',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de uniones ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pegantes, sellantes, embalaje y empaque ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normas de seguridad en el espacio de trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas para acabados de mobiliarios en madera',
      referencia:
        'Centro de Innovación Tecnológica de la madera., (2015). <em> Técnicas de acabados II: veteado y envejecido en madera natural y pintada.</em>]',
      tipo: 'Libro digital.',
      link:
        'https://cdn.www.gob.pe/uploads/document/file/1459426/08.%20T%C3%A9cnicas%20de%20Acabados%20II%20Veteado%20y%20envejecidos%20en%20madera%20natural%20y%20pintada.pdf.pdf',
    },
    {
      tema: 'Técnicas para acabados de mobiliarios en madera ',
      referencia:
        'Condor., (s/f). <em> Productos línea madera. Conceptos básicos de madera, bases y sustratos.<em> Fundación Suyana. (2017). Manual básico de carpintería. (1ª ed.). ',
      tipo: 'Manual en línea.',
      link:
        'https://www.pinturascondor.com/wp-content/uploads/2019/11/manual-linea-madera.pdf',
    },
    {
      tema: 'Identificación y manejo de herramientas',
      referencia:
        'Fundación Suyana. (2017). <em> Manual básico de carpintería.</em> (1ª ed.). ',
      tipo: 'Manual en línea.',
      link:
        'https://suyana.org/wp-content/uploads/2021/07/Handbook_Carpentry.pdf      ',
    },
    {
      tema: 'Mantenimiento básico de equipos para la producción',
      referencia:
        'García, S., (Ed.). (2009). <em> Mantenimiento correctivo organización y gestión de la reparación de las averías.</em> ',
      tipo: 'Manual en línea.',
      link:
        'http://www.renovetec.com/mantenimientoindustrial-vol4-correctivo.pdf      ',
    },
    {
      tema: 'Mantenimiento básico de equipos para la producción',
      referencia:
        'SIMA. (s/f). <em> Artículos y productos de bajo coste para mantenimiento, mantenimiento preventivo.</em> ',
      tipo: 'Manual en línea.',
      link:
        'http://www.mantenimientoplanificado.com/j%20guadalupe%20articulos/MANTENIMIENTO%20PREVENTIVO%20parte%201.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'posibilidad de acceder a cierta cosa o facilidad para hacerlo.',
    },
    {
      termino: 'Barniz',
      significado:
        'disolución de una o más resinas en un aceite o una sustancia volátil, la cual se aplica a la superficie de un objeto para que al secarse forme una capa lustrosa capaz de resistir la acción del aire y de la humedad.',
    },
    {
      termino: 'Cohesión',
      significado:
        'unión entre las moléculas de un cuerpo debido a la fuerza de atracción molecular.',
    },
    {
      termino: 'Desbaste',
      significado:
        'acción de desbastar quitando las partes bastas de un material.',
    },
    {
      termino: 'Embalaje',
      significado:
        'caja o cualquier envoltura con que se protege un objeto que se va a transportar.',
    },
    {
      termino: 'Impermeabilizar',
      significado:
        'cubrir una superficie con una sustancia o material impermeable.',
    },
    {
      termino: 'Integridad',
      significado: 'calidad de íntegro',
    },
    {
      termino: 'Latón',
      significado:
        'aleación de cobre y cinc de color amarillo, dúctil y maleable, el cual al pulirse brilla con facilidad; se emplea en la fabricación de recipientes y estructuras metálicas.',
    },
    {
      termino: 'Minimizar',
      significado:
        'reducir considerablemente o al mínimo una cosa material o inmaterial; especialmente el valor o importancia de algo o alguien.',
    },
    {
      termino: 'Nitrocelulosa',
      significado:
        'derivado de la celulosa que produce diversos productos como explosivos, lacas, plásticos, etc.',
    },
    {
      termino: 'Procura',
      significado:
        'palabra referida a la acepción de tener una intención de realizar o hacer algo.',
    },
    {
      termino: 'Referente',
      significado: 'que refiere o hace referencia a lo que se expresa.',
    },
    {
      termino: 'Ralentizar',
      significado: 'hacer más lenta una actividad o proceso.',
    },
    {
      termino: 'Tonel',
      significado:
        'recipiente para líquidos grande, generalmente de metal de forma cilíndrica y cierre hermético que suele usarse para transportar líquidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centro de Innovación Tecnológica de la madera., (2015). <em> Técnicas de acabados II: veteado y envejecido en madera natural y pintada.</em> ',
      link:
        'https://cdn.www.gob.pe/uploads/document/file/1459426/08.%20T%C3%A9cnicas%20de%20Acabados%20II%20Veteado%20y%20envejecidos%20en%20madera%20natural%20y%20pintada.pdf.pdf',
    },
    {
      referencia:
        'Condor., (s/f). <em> Productos línea madera. Conceptos básicos de madera, bases y sustratos.</em>',
      link:
        'https://www.pinturascondor.com/wp-content/uploads/2019/11/manual-linea-madera.pdf',
    },
    {
      referencia:
        'Fundación Suyana. (2017). <em> Manual básico de carpintería.</em> (1ª ed.). ',
      link:
        'https://suyana.org/wp-content/uploads/2021/07/Handbook_Carpentry.pdf',
    },
    {
      referencia:
        'García, S., (Ed.). (2009). <em> Mantenimiento correctivo organización y gestión de la reparación de las averías.</em> ',
      link:
        'http://www.renovetec.com/mantenimientoindustrial-vol4-correctivo.pdf',
    },
    {
      referencia:
        'SIMA. (s/f). <em> Artículos y productos de bajo coste para mantenimiento, mantenimiento preventivo.</em> ',
      link:
        'http://www.mantenimientoplanificado.com/j%20guadalupe%20articulos/MANTENIMIENTO%20PREVENTIVO%20parte%201.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
