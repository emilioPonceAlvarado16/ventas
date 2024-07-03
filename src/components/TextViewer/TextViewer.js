import React from 'react';

export default function TextViewer(props) {
    const fields = props.fields || [];
    return (
        <textarea
            readOnly={true}
            value={fields.map(field => field.value).join("\n\n")}
            style={{ display: 'flex', background: '#2c2c2c', height: '100vh', width: '50vw', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', color: 'white' }} />
    );
}
