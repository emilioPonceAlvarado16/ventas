import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SvgIcons from './svgIcons';

const categories = ['Todas', 'Artículos', 'Tesis', 'Revistas'];
const templates = [
    { id: 1, title: 'APA V7', img: './images/template_1.jpeg', category: 'Artículos' },
    { id: 2, title: 'IEEE', img: './images/template_2.jpeg', category: 'Artículos' },
    { id: 3, title: 'Paper', img: './images/template_3.jpeg', category: 'Revistas' },
    //... más plantillas
];

const Modal = ({ onClose }) => {
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

const TemplateList = ({ templates, onSearch }) => {
    return (
        <div className="template-list">
            <input
                type="text"
                placeholder="Buscar plantilla"
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className="template-grid">
                {templates.map((template) => (
                    <div key={template.id} className="template-item">
                        <Image 
                            width={500}
                            height={200}
                            src={template.img} alt={template.title}
                        />
                        <p>{template.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modal;
