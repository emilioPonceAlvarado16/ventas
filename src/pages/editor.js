import FileSystem from "../components/FileSystem";
import DocumentEditor from "../components/DocumentEditor";
import React, { useState } from 'react';

export default function editor() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            <div style={{ flex: isCollapsed ? 0.1 : 1, maxWidth: isCollapsed ? '10%' : '13.5%' }}>
                <FileSystem isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>
            <div style={{ flex: 4, width: '80%' }}>
                <DocumentEditor />
            </div>
        </div>
    )
}
