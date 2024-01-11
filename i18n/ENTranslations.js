const ENtranslations = {
    "pricing": {
        "features": {


            "basic": [
                "Load MS Word documents or TXT files",
                "Text classification with AI",
                "Simple editing and PDF compilation with LaTeX",
                "Text editor with drag-and-drop functionality and template switching"
            ],
            "professional": [
                "All features of the Basic plan",
                "Use of GPT-4 for advanced editing",
                "Enhanced text editor capabilities"
            ]

        },
        "headingDetail": "FormatMaker: Editing Simplified",
        "headingH2": "AI & LaTeX Enhanced Documents",
        "monthly": "Monthly",
        "yearly": "Yearly",
        "month": "Month",
        "year": "Year",
        "basicPlan": "Basic Plan",
        "professionalPlan": "Professional",
        "getStarted": "Get Started"
    },
    hero: {
        innovativeDocumentEditing: "Innovative Document Editing",
        transformYourDocuments: "Transform Your Documents Effortlessly",
        paragraph: "Format Maker revolutionizes document editing and creation. Utilize AI-powered tools to modify, create, and export documents in LaTeX format with ease. Import from MS Word, .txt, or choose from templates to streamline your workflow.",
        getStarted: "Get Started",
        learnMore: "Learn More",
    },
    navbar: {
        routes: [
            { route: "#demo", label: "Demo" },
            { route: "#features", label: "Features" },
            { route: "#link-three", label: "Contact Us" },
            { route: "#pricing", label: "Pricing" }
        ],
        logout: "Logout",
        mobileMenu: [
            { route: "", label: "Logout", onClick:"Logout" } // Añade aquí otros elementos específicos para móviles si es necesario
        ],
        languages: [
            { code: 'EN', name: 'English' },
            { code: 'ES', name: 'Spanish' },
        ]
    },

    featuresSection: {
        features: [
            {
                logo: "images/Logo-Mark.png",
                title: "AI for Text Classification",
                paragraph: "Automate the classification of your Word documents and texts with our advanced AI."
            },
            {
                logo: "images/Logo-Mark.png",
                title: "Advanced Manual Classification",
                paragraph: "Total control in organizing your files with manual classification tools."
            },
            {
                logo: "images/Logo-Mark.png",
                title: "Simplified Format Editing",
                paragraph: "Change the format of your documents quickly and uniformly with just a few clicks."
            },
            {
                logo: "images/Logo-Mark.png",
                title: "Advanced Editing with GPT-4",
                paragraph: "Edit your documents precisely using GPT-4 technology for specific instructions."
            },
            {
                logo: "images/Logo-Mark.png",
                title: "Export to LaTeX and PDF Rendering",
                paragraph: "Easily export to LaTeX and render your documents in PDF for a professional finish."
            }
        ],
        headingDetail: "Efficient and Simple Editing",
        headingH3: "Innovative Features",
        paragraph: "Discover the advanced tools that will transform your workflow. From AI to precise editing, FormatMaker makes it possible."

    },
    footer:{
        data: [
            {
                title: "About Us",
                links: [
                    { url: "#", text: "Who We Are" },
                    { url: "#", text: "Our Mission" },
                    { url: "#", text: "Contact" }
                ]
            },
            {
                title: "Products",
                links: [
                    { url: "#", text: "FormatMaker Pro" },
                    { url: "#", text: "FormatMaker Basic" },
                    { url: "#", text: "Compare Products" }
                ]
            },
            {
                title: "Support",
                links: [
                    { url: "#", text: "Help Center" },
                    { url: "#", text: "Documentation" },
                    { url: "#", text: "Community" }
                ]
            },
            {
                title: "Resources",
                links: [
                    { url: "#", text: "Blog" },
                    { url: "#", text: "Case Studies" },
                    { url: "#", text: "Webinars" }
                ]
            }
        ],
        paragraphSmall: "With FormatMaker, transform your documents quickly and efficiently, optimizing your workflow."
    }



}
export default ENtranslations;
