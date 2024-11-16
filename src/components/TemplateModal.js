import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SvgIcons from './svgIcons';

const categories = ['All', 'Articles', 'Theses', 'Journals'];
const templates = [
    { id: 1, title: 'APA V7', img: './images/template_1.jpeg', category: 'Articles', url: "./pdfs/template1.pdf" },
    { id: 2, title: 'IEEE', img: './images/template_2.jpeg', category: 'Articles', url: "./pdfs/template3.pdf" },
    { id: 3, title: 'Paper', img: './images/template_3.jpeg', category: 'Journals', url: "./pdfs/template2.pdf" },
    { id: 4, title: 'CV', img: './images/template4.png', category: '', url: "./pdfs/Isaias_Ponce_CV.pdf" },
    //... more templates
];
const Modal = ({ onClose, selectedTemplate, setSelectedTemplate }) => {
    const modalRef = useRef();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');



    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && onClose) {
            setTimeout(() => onClose(), 80);
        }
    };

    const filteredTemplates = templates
        .filter(template => selectedCategory === 'All' || template.category === selectedCategory)
        .filter(template => template.title.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setTimeout(() => onClose(), 150);
            } else if (e.key === 'Tab') {
                e.preventDefault();
                const currentIndex = filteredTemplates.findIndex(template => template.id === selectedTemplate?.id);
                const nextIndex = currentIndex >= 0 && currentIndex < filteredTemplates.length - 1 ? currentIndex + 1 : 0;
                setSelectedTemplate(filteredTemplates[nextIndex]);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                const currentIndex = filteredTemplates.findIndex(template => template.id === selectedTemplate?.id);
                const nextIndex = (currentIndex + 1) % filteredTemplates.length;
                setSelectedTemplate(filteredTemplates[nextIndex]);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const currentIndex = filteredTemplates.findIndex(template => template.id === selectedTemplate?.id);
                const nextIndex = (currentIndex - 1 + filteredTemplates.length) % filteredTemplates.length;
                setSelectedTemplate(filteredTemplates[nextIndex]);
            }
            else if (e.key === 'Enter' && selectedTemplate) {
                e.preventDefault(); 
                setTimeout(() => onClose(), 80);
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, selectedTemplate, setSelectedTemplate, filteredTemplates, searchTerm, selectedCategory]);

    return (
        <div className="modal" onClick={handleOutsideClick}>

            <div className="modal-content" ref={modalRef}>
                <CategoryList categories={categories} onSelect={setSelectedCategory} />
                <TemplateList
                    templates={filteredTemplates}
                    onSearch={(term) => setSearchTerm(term)}
                    selectedTemplate={selectedTemplate}
                    onSelectTemplate={setSelectedTemplate}
                    onClose={onClose}
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

const TemplateList = ({ templates, onSearch, onClose, selectedTemplate, onSelectTemplate }) => {
    const handleOpenURL = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="template-list">
            <input
                type="text"
                placeholder="Search template"
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
                    onClick={onClose}
                >
                    {!selectedTemplate ? "Select" : "Selected!"}
                </button>
                {selectedTemplate && <p className="selected-template-name">{selectedTemplate.title}</p>}
            </div>
        </div>
    );
};


export default Modal;
