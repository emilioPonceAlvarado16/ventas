const ESTranslations = {
    pricing: {
      features: {
        "basic": [
          "5% store-wide discount",
          "Free standard shipping",
          "Access to monthly promotions"
        ],
        "professional": [
          "10% store-wide discount",
          "Free express shipping",
          "Early access to sales",
          "Birthday gift"
        ]
      },
      "headingDetail": "Bellisimas EC: Subscription Plans",
      "headingH2": "Exclusive Member Benefits",
      "monthly": "Monthly",
      "yearly": "Yearly",
      "month": "Month",
      "year": "Year",
      "basicPlan": "Basic",
      "professionalPlan": "Premium",
      "getStarted": "Subscribe Now"
    },
  
    hero: {
      innovativeDocumentEditing: "Discover your style at Bellisimas EC",
      transformYourDocuments: "Unique fashion for every occasion",
      paragraph: "Explore our seasonal collection of clothing and accessories. Find the latest trends and get your order delivered fast across Ecuador.",
      getStarted: "Shop Now",
      learnMore: "View New Arrivals"
    },
  
    navbar: {
      routes: [
        { route: "#inicio", label: "Home" },
        { route: "#tienda", label: "Shop" },
        { route: "#novedades", label: "New Arrivals" },
        { route: "#ofertas", label: "Sale" }
      ],
      logout: "Log Out",
      mobileMenu: [
        { route: "#inicio", label: "Home", onClick: "navigate" },
        { route: "#tienda", label: "Shop", onClick: "navigate" },
        { route: "#ofertas", label: "Sale", onClick: "navigate" },
        { route: "#contacto", label: "Contact", onClick: "navigate" }
      ],
      languages: [
        { code: 'EN', name: 'English' },
        { code: 'ES', name: 'Spanish' }
      ],
      avatarMenu: [
        { label: "My Profile", onClick: "profile" },
        { label: "Log Out", onClick: "logout" }
      ]
    },
  
    featuresSection: {
      features: [
        {
          id: "f1",
          logo: "icons/fast-shipping.svg",
          title: "Fast Shipping",
          paragraph: "Receive your order within 24–48 hours in major cities."
        },
        {
          id: "f2",
          logo: "icons/secure-payment.svg",
          title: "Secure Payment",
          paragraph: "SSL-encrypted transactions for your peace of mind."
        },
        {
          id: "f3",
          logo: "icons/variety.svg",
          title: "Wide Variety",
          paragraph: "Clothing in all styles and sizes."
        },
        {
          id: "f4",
          logo: "icons/customer-support.svg",
          title: "Customer Support",
          paragraph: "24/7 support for inquiries and returns."
        },
        {
          id: "f5",
          logo: "icons/quality.svg",
          title: "Quality Fashion",
          paragraph: "Hand-picked products from top brands."
        }
      ],
      headingDetail: "Benefits of Shopping at Bellisimas EC",
      headingH3: "Highlighted Features",
      paragraph: "Discover why we’re the best choice to refresh your style with the latest fashion."
    },
  
    footer: {
      data: [
        {
          id: "about-us",
          title: "Bellisimas EC",
          links: [
            { id: "who", url: "#about", text: "Who We Are" },
            { id: "careers", url: "#careers", text: "Careers" },
            { id: "blog", url: "#blog", text: "Blog" }
          ]
        },
        {
          id: "customer-service",
          title: "Customer Service",
          links: [
            { id: "help", url: "#help", text: "Help Center" },
            { id: "shipping", url: "#shipping", text: "Shipping & Returns" },
            { id: "faq", url: "#faq", text: "FAQ" }
          ]
        },
        {
          id: "legal",
          title: "Legal",
          links: [
            { id: "privacy", url: "#privacy", text: "Privacy Policy" },
            { id: "terms", url: "#terms", text: "Terms & Conditions" },
            { id: "cookies", url: "#cookies", text: "Cookies Policy" }
          ]
        },
        {
          id: "contact",
          title: "Contact",
          links: [
            { id: "email", url: "mailto:soporte@bellisimasec.com", text: "support@bellisimasec.com" },
            { id: "phone", url: "tel:+593987654321", text: "+593 9 8765 4321" },
            { id: "stores", url: "#stores", text: "Our Stores" }
          ]
        }
      ],
      paragraphSmall: "At Bellisimas EC, we dress your style with quality fashion and exceptional service."
    }
  };
  
  export default ESTranslations;
  