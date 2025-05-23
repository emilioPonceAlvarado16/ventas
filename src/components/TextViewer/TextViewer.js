import React, { useRef, useState } from 'react';
import SvgIcons from '../svgIcons';

export default function TextViewer(props) {
    const setVisualizePrompt = props.setVisualizePrompt || null;
    const setSelectedText = props.setSelectedText || function() {};
    const textViewerRef = useRef(null);
    const currentText = props.selectedText || ""

    const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
    const [showIcon, setShowIcon] = useState(false);

    const handlePrompt = (event) => {
        event.preventDefault();
        event.stopPropagation();
        copyTextSelection()
        setShowIcon(false);
        setVisualizePrompt({ isPromptOpen: true, isMinimized: false });
    };
    const copyTextSelection = () => {
         if (textViewerRef.current) {
            const textarea = textViewerRef.current;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            if (start !== end) {
                const selectedText = textarea.value.substring(start, end);
                setSelectedText(currentText + "\n"+selectedText);        
            } else {
                setShowIcon(false);
                setSelectedText(currentText);
            }
        }
    }
    const handleTextSelection = () => {
        if (textViewerRef.current) {
            const textarea = textViewerRef.current;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            if (start !== end) {
                const beforeText = textarea.value.substring(0, start);
                const lines = beforeText.split("\n").length;
                const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 10) || 24; // Default line height
                setIconPosition({
                    x: 20, // Arbitrary value, x position calculation is complex in textarea
                    y: (lines * lineHeight) - textarea.scrollTop
                });
                setShowIcon(true);
            } else {
                setShowIcon(false);
                setSelectedText(currentText);
            }
        }
    };

    return (
        <>
            <textarea
                ref={textViewerRef}
                onKeyUp={handleTextSelection}
                onMouseUp={handleTextSelection}
                value={props.fields.filter(field => field.type != "im").map(field => field.value).join("\n")}
                style={{
                    display: 'flex',
                    background: '#2c2c2c',
                    height: '100vh',
                    width: '50vw',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'auto',
                    color: 'white',
                    whiteSpace: 'pre-wrap',
                    padding: '10px',
                    outline: 'none'
                }}
            />
            {showIcon && <SvgIcons onClick={handlePrompt} style={{ position: 'absolute', left: iconPosition.x, top: iconPosition.y, cursor: 'pointer' }} type="keyboard" />}
        </>
    );
}
