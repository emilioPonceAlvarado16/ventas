import React from 'react';


export default function SvgIcons(props) {
    const type = props.type;
    const disabled = props.disabled || false
    let svg;

    switch (type) {
        case 'success':
            svg =

                (
                    <div className="f-alert-icon w-embed">

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z" fill="currentColor"></path>
                        </svg>
                    </div>
                )
            break;


        case 'trash':
            svg = (
                <div className="f-alert-icon" style={{ backgroundColor: "#2c2c2c", borderBottom: ".1px solid white" }}>
                    <svg style={{ width: "85%", height: "85%" }} viewBox="0 0 24 24" fill="#2c2c2c" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF0000" d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z"></path>
                    </svg>
                </div>
            )
            break;
        case 'folder':
            svg = (
                <div className="f-alert-icon w-embed">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                        <path d="M10 4l2 2h10v14H2V4h8zm0 0H2v16h20V6H12L10 4z" />
                    </svg>

                </div>
            );
            break;
        case 'image':
            svg = (
                <div className="f-alert-icon w-embed">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M2 2h20v20H2V2zm1 2v16h18V4H3zm10 12l4-5 4 5H7l4-4 2 2z" />
                    </svg>
                </div>
            );
            break;
        case 'error':
            svg = (
                <div className="f-alert-icon w-embed">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z" fill="currentColor"></path>
                    </svg>
                </div>
            )
            break;
        case 'close':
            svg = (
                <div className="f-alert-icon w-embed">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"></path>
                    </svg>
                </div>
            )
            break;
        case 'eyeIcon':
            const isTool = props.isTool || false
            svg =
                (
                    <div className={`${isTool ? 'rounded-keyboard-bg' : ''}`}>
                        <svg width="21" height="21" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill={`${isTool ? 'white' : ''}`}/>
                        </svg>

                    </div>
                );
            break;
        case 'eyeOffIcon':
            const isTool2 = props.isTool || false
            svg = (
                <div className={`${isTool2 ? 'rounded-keyboard-bg'+`${disabled ? ' disabled' : ''}` : ''}`}>

                    <svg width="21" height="21" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"  fill={`${isTool2 ? 'white' : ''}`}/>
                        <path d="M2 2l20 20" stroke="#000" strokeLinecap="round" strokeLinejoin="round"  fill={`${isTool2 ? 'white' : ''}`} />
                    </svg>
                </div>
            )
            break;
        case 'angleRight':
            svg =
                (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M8 6L14 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                );
            break;

        case 'angleLeft':
            svg =
                (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M16 6L10 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                );
            break;
        case 'send':
            svg = (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2,21 L22,12 L2,3 L2,10 L17,12 L2,14 L2,21" fill="white"></path>
                    {/* <path d="M2,21 L22,12 L2,3 L2,10 L17,12 L2,14 L2,21" fill="#ffc107"></path> */}
                </svg>
            );
            break;




        case 'keyboard':
            svg = (
                <div className={`rounded-keyboard-bg ${disabled ? 'disabled' : ''}`}>
                    <svg viewBox="0 0 24 24" width="22" height="22" className={`keyboard-fill ${disabled ? 'disabled' : ''}`}>
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2zm-9 12H4v-2h7v2zm0-4H4v-2h7v2zm0-4H4V6h7v2zm9 8h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7V6h7v2z"></path>
                    </svg>
                </div>
            );
            break;

        case 'lightning':
            svg = (
                <div className={`rounded-green-bg ${disabled ? 'disabled' : ''}`}>
                    <svg viewBox="0 0 24 24" width="22" height="22" className={`yellow-fill ${disabled ? 'disabled' : ''}`}>
                        <path d="M7 2v11h3v9l7-12h-4l4-8z"></path>
                    </svg>
                </div>
            );
            break;

        default:
            svg = (
                <div className="f-alert-icon w-embed">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z" fill="currentColor"></path>
                    </svg>
                </div>

            )
            break;
    }

    return (
        <div {...props} >{svg}</div>
    )
}
