const ESTranslations = {
    pricing: {
        features: {

            "basic": [
                "Cargar documentos de MS Word o archivos TXT",
                "Clasificación de texto con IA",
                "Edición simple y compilación de PDF con LaTeX",
                "Editor de texto con funcionalidad de arrastrar y soltar y cambio de plantillas"
            ],
            "professional": [
                "Todas las características del plan Básico",
                "Uso de GPT-4 para edición avanzada",
                "Capacidades mejoradas del editor de texto"
            ]
        },

        "headingDetail": "FormatMaker: Edición Simplificada",
        "headingH2": "Documentos Mejorados con AI & LaTeX",
        "monthly": "Mensual",
        "yearly": "Anual",
        "month": "Mes",
        "year": "Año",
        "basicPlan": "Plan Básico",
        "professionalPlan": "Profesional",
        "getStarted": "Empieza Ya"

    },
    hero: {
        innovativeDocumentEditing: "Edición Innovadora de Documentos",
        transformYourDocuments: "Transforma Tus Documentos sin Esfuerzo",
        paragraph: "Format Maker revoluciona la edición y creación de documentos. Utiliza herramientas impulsadas por IA para modificar, crear y exportar documentos en formato LaTeX con facilidad. Importa desde MS Word, .txt o elige entre plantillas para optimizar tu flujo de trabajo.",
        getStarted: "Empieza Ya",
        learnMore: "Aprende Más",
    },
    navbar: {
        routes: [
            { route: "#demo", label: "Demo" },
            { route: "#features", label: "Funcionalidades" },
            { route: "#link-three", label: "Contacto" },
            { route: "#pricing", label: "Precios" }
        ],
        logout: "Salir",
        mobileMenu: [
          { route: "", label: "Salir", onClick:"Logout" } // Añade aquí otros elementos específicos para móviles si es necesario
        ],
        languages: [
            { code: 'EN', name: 'Inglés' },
            { code: 'ES', name: 'Español' },
        ],
        avatarMenu: [ 
          { label: "Mi Perfil", onClick: "profile" },
          { label: "Configuración", onClick: "settings" },
        ]

    },
    featuresSection: {
        features: [
            {
                id:"f1",
                logo: "images/Logo-Mark.png",
                title: "IA para Clasificación de Textos",
                paragraph: "Automatiza la clasificación de tus documentos de Word y textos con nuestra avanzada IA."
            },
            {
                id:"f2",
                logo: "images/Logo-Mark.png",
                title: "Clasificación Manual Avanzada",
                paragraph: "Control total en la organización de tus archivos con herramientas de clasificación manual."
            },
            {
                id:"f3",
                logo: "images/Logo-Mark.png",
                title: "Edición de Formato Simplificada",
                paragraph: "Cambia el formato de tus documentos de manera rápida y uniforme con solo unos clics."
            },
            {
                id:"f4",
                logo: "images/Logo-Mark.png",
                title: "Edición Avanzada con GPT-4",
                paragraph: "Edita tus documentos con precisión usando la tecnología de GPT-4 para instrucciones específicas."
            },
            {
                id:"f5",
                logo: "images/Logo-Mark.png",
                title: "Exportación a LaTeX y Renderizado de PDF",
                paragraph: "Exporta fácilmente a LaTeX y renderiza tus documentos en PDF para un acabado profesional."
            }
        ],
        headingDetail: "Edición Eficaz y Sencilla",
        headingH3: "Funcionalidades Innovadoras",
        paragraph: "Descubre las herramientas avanzadas que transformarán tu flujo de trabajo. Desde IA hasta edición precisa, FormatMaker lo hace posible."
    },
        footer: {
            
            data:[
            {
              id:"about-us",
              title: "Acerca de Nosotros",
              links: [
                { id:"who", url: "#", text: "Quiénes Somos" },
                { id:"mission", url: "#", text: "Nuestra Misión" },
                { id:"contact", url: "#", text: "Contacto" }
              ]
            },
            {
              id:"products",
              title: "Productos",
              links: [
                {id:"fm-pro", url: "#", text: "FormatMaker Pro" },
                {id:"fm-basic", url: "#", text: "FormatMaker Basic" },
                {id:"fm-comp", url: "#", text: "Comparar Productos" }
              ]
            },
            {
              id:"support",
              title: "Soporte",
              links: [
                { id:"help", url: "#", text: "Centro de Ayuda" },
                { id:"docs", url: "#", text: "Documentación" },
                { id:"com", url: "#", text: "Comunidad" }
              ]
            },
            {
              id:"resources",    
              title: "Recursos",
              links: [
                { id:"blog", url: "#", text: "Blog" },
                { d:"case", url: "#", text: "Estudios de Caso" },
                { id:"webinars", url: "#", text: "Webinars" }
              ]
            }
          ],
          paragraphSmall:"Con FormatMaker, transforma tus documentos de forma rápida y eficiente, optimizando tu flujo de trabajo."

        }

}
export default ESTranslations;
