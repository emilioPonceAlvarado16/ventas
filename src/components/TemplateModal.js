import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SvgIcons from './svgIcons';

const categories = ['Todas', 'Artículos', 'Tesis', 'Revistas'];
const templates = [
    { id: 1, title: 'APA V7', img: './images/template_1.jpeg', category: 'Artículos', url: "./pdfs/template1.pdf" },
    { id: 2, title: 'IEEE', img: './images/template_2.jpeg', category: 'Artículos', url: "./pdfs/template3.pdf" },
    { id: 3, title: 'Paper', img: './images/template_3.jpeg', category: 'Revistas', url: "./pdfs/template2.pdf" },
    //... más plantillas
];

const Modal = ({ onClose }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const modalRef = useRef();
    const [status, setStatus] = useState('entering');

    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setStatus('entered'), 0);
        return () => clearTimeout(timer);
    }, []);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && onClose) {
            setStatus('exiting');
            setTimeout(() => onClose(), 80);
        }
    };

    const filteredTemplates = templates
        .filter(template => selectedCategory === 'Todas' || template.category === selectedCategory)
        .filter(template => template.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="modal" onClick={handleOutsideClick}>

            <div className="modal-content" ref={modalRef}>
                <CategoryList categories={categories} onSelect={setSelectedCategory} />
                <TemplateList
                    templates={filteredTemplates}
                    onSearch={(term) => setSearchTerm(term)}
                    selectedTemplate={selectedTemplate}
                    onSelectTemplate={setSelectedTemplate}
                />
            </div>
        </div>
    );
};

const CategoryList = ({ categories, onSelect }) => {
    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <div key={index} onClick={() => onSelect(category)}>
                    {category}
                </div>
            ))}
        </div>
    );
};

const TemplateList = ({ templates, onSearch, selectedTemplate, onSelectTemplate }) => {
    const handleOpenURL = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="template-list">
            <input
                type="text"
                placeholder="Buscar plantilla"
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className="template-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`template-item ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
                        onClick={() => onSelectTemplate(template)}
                    >
                        <Image width={500} height={200} src={template.img} alt={template.title} />
                        <div className="icon-container2">
                            <SvgIcons type="settings" isTool={true} backGroundColor="#080f25" />
                            <SvgIcons type="eyeIcon" isTool={true} onClick={() => handleOpenURL(template.url)} />
                        </div>
                        <p>{template.title}</p>
                    </div>
                ))}
            </div>

            <div className="selection-panel">
                <button
                    className="select-button"
                    disabled={!selectedTemplate}
                    onClick={() => alert('Template seleccionado: ' + selectedTemplate.title)}
                >
                    Seleccionar
                </button>
                {selectedTemplate && <p className="selected-template-name">{selectedTemplate.title}</p>}
            </div>
        </div>
    );
};


export default Modal;
