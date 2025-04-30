const ESTranslations = {
  pricing: {
    features: {
      "basic": [
        "5% de descuento en toda la tienda",
        "Envío estándar gratuito",
        "Acceso a promociones mensuales"
      ],
      "professional": [
        "10% de descuento en toda la tienda",
        "Envío exprés gratuito",
        "Acceso anticipado a ventas",
        "Regalo de cumpleaños"
      ]
    },
    "headingDetail": "Bellisimas EC: Planes de Suscripción",
    "headingH2": "Beneficios Exclusivos para Miembros",
    "monthly": "Mensual",
    "yearly": "Anual",
    "month": "Mes",
    "year": "Año",
    "basicPlan": "Básico",
    "professionalPlan": "Premium",
    "getStarted": "Suscríbete Ya"
  },

  hero: {
    innovativeDocumentEditing: "Descubre tu estilo en Bellisimas EC",
    transformYourDocuments: "Moda única para cada ocasión",
    paragraph: "Explora nuestra colección de ropa y accesorios de temporada. Encuentra las últimas tendencias y recibe tu pedido con envío rápido a todo Ecuador.",
    getStarted: "Compra Ahora",
    learnMore: "Ver Novedades"
  },

  navbar: {
    routes: [
      { route: "#inicio", label: "Inicio" },
      { route: "#tienda", label: "Tienda" },
      { route: "#novedades", label: "Novedades" },
      { route: "#ofertas", label: "Ofertas" }
    ],
    logout: "Cerrar Sesión",
    mobileMenu: [
      { route: "#inicio", label: "Inicio", onClick: "navigate" },
      { route: "#tienda", label: "Tienda", onClick: "navigate" },
      { route: "#ofertas", label: "Ofertas", onClick: "navigate" },
      { route: "#contacto", label: "Contacto", onClick: "navigate" }
    ],
    languages: [
      { code: 'EN', name: 'Inglés' },
      { code: 'ES', name: 'Español' }
    ],
    avatarMenu: [
      { label: "Mi Perfil", onClick: "profile" },
      { label: "Cerrar Sesión", onClick: "logout" }
    ]
  },

  featuresSection: {
    features: [
      {
        id: "f1",
        logo: "icons/fast-shipping.svg",
        title: "Envío Rápido",
        paragraph: "Recibe tu pedido en 24–48 horas en las principales ciudades."
      },
      {
        id: "f2",
        logo: "icons/secure-payment.svg",
        title: "Pago Seguro",
        paragraph: "Transacciones protegidas con cifrado SSL."
      },
      {
        id: "f3",
        logo: "icons/variety.svg",
        title: "Gran Variedad",
        paragraph: "Ropa para todos los estilos y tallas."
      },
      {
        id: "f4",
        logo: "icons/customer-support.svg",
        title: "Atención al Cliente",
        paragraph: "Soporte 24/7 para consultas y devoluciones."
      },
      {
        id: "f5",
        logo: "icons/quality.svg",
        title: "Moda de Calidad",
        paragraph: "Productos seleccionados de las mejores marcas."
      }
    ],
    headingDetail: "Ventajas de Comprar en Bellisimas EC",
    headingH3: "Características Destacadas",
    paragraph: "Descubre por qué somos la mejor opción para renovar tu estilo con la última moda."
  },

  footer: {
    data: [
      {
        id: "about-us",
        title: "Bellisimas EC",
        links: [
          { id: "who", url: "#about", text: "Quiénes Somos" },
          { id: "careers", url: "#careers", text: "Trabaja con Nosotros" },
          { id: "blog", url: "#blog", text: "Blog" }
        ]
      },
      {
        id: "customer-service",
        title: "Servicio al Cliente",
        links: [
          { id: "help", url: "#help", text: "Centro de Ayuda" },
          { id: "shipping", url: "#shipping", text: "Envíos y Devoluciones" },
          { id: "faq", url: "#faq", text: "Preguntas Frecuentes" }
        ]
      },
      {
        id: "legal",
        title: "Legal",
        links: [
          { id: "privacy", url: "#privacy", text: "Política de Privacidad" },
          { id: "terms", url: "#terms", text: "Términos y Condiciones" },
          { id: "cookies", url: "#cookies", text: "Política de Cookies" }
        ]
      },
      {
        id: "contact",
        title: "Contacto",
        links: [
          { id: "email", url: "mailto:soporte@bellisimasec.com", text: "soporte@bellisimasec.com" },
          { id: "phone", url: "tel:+593987654321", text: "+593 9 8765 4321" },
          { id: "stores", url: "#stores", text: "Nuestras Tiendas" }
        ]
      }
    ],
    paragraphSmall: "En Bellisimas EC, vestimos tu estilo con moda de calidad y atención excepcional."
  }
};

export default ESTranslations;
