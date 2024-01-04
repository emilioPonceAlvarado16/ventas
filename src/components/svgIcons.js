import React from 'react';


export default function SvgIcons(props) {
    const type = props.type;
    const disabled = props.disabled || false
    const width = props.width || "16"
    const height = props.height || "16"
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
                    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
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
        case 'featureCheck':
            svg = (
                <div className="f-icon-regular w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="white"></path>
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
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill={`${isTool ? 'white' : ''}`} />
                        </svg>

                    </div>
                );
            break;
        case 'eyeOffIcon':
            const isTool2 = props.isTool || false
            svg = (
                <div className={`${isTool2 ? 'rounded-keyboard-bg' + `${disabled ? ' disabled' : ''}` : ''}`}>

                    <svg width="21" height="21" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill={`${isTool2 ? 'white' : ''}`} />
                        <path d="M2 2l20 20" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fill={`${isTool2 ? 'white' : ''}`} />
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

        case 'gear':

            svg = (
                <div>

                    <svg className="gear-svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19.4,12.6a1.5,1.5,0,0,0,0-1.2l2.1-1.6a.75.75,0,0,0,.18-.95l-2-3.4a.75.75,0,0,0-.91-.3l-2.5,1a3.58,3.58,0,0,0-.84-.49l-.38-2.7a.75.75,0,0,0-.74-.63H9.7a.75.75,0,0,0-.74.63l-.38,2.7a3.58,3.58,0,0,0-.84.49l-2.5-1a.75.75,0,0,0-.91.3l-2,3.4a.75.75,0,0,0,.18.95l2.1,1.6a1.5,1.5,0,0,0,0,1.2l-2.1,1.6a.75.75,0,0,0-.18.95l2,3.4a.75.75,0,0,0,.91.3l2.5-1c.26.18.53.35.84.49l.38,2.7a.75.75,0,0,0,.74.63h4.6a.75.75,0,0,0,.74-.63l.38-2.7c.31-.14.58-.31.84-.49l2.5,1a.75.75,0,0,0,.91-.3l2-3.4a.75.75,0,0,0-.18-.95ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <style jsx>{`
                        .gear-svg {
                            animation: spin 5s linear infinite;
                        }

                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            );
            break;
        case 'gear2':

            svg = (
                <div>

                    <svg className="gear-svg small-gear" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19.4,12.6a1.5,1.5,0,0,0,0-1.2l2.1-1.6a.75.75,0,0,0,.18-.95l-2-3.4a.75.75,0,0,0-.91-.3l-2.5,1a3.58,3.58,0,0,0-.84-.49l-.38-2.7a.75.75,0,0,0-.74-.63H9.7a.75.75,0,0,0-.74.63l-.38,2.7a3.58,3.58,0,0,0-.84.49l-2.5-1a.75.75,0,0,0-.91.3l-2,3.4a.75.75,0,0,0,.18.95l2.1,1.6a1.5,1.5,0,0,0,0,1.2l-2.1,1.6a.75.75,0,0,0-.18.95l2,3.4a.75.75,0,0,0,.91.3l2.5-1c.26.18.53.35.84.49l.38,2.7a.75.75,0,0,0,.74.63h4.6a.75.75,0,0,0,.74-.63l.38-2.7c.31-.14.58-.31.84-.49l2.5,1a.75.75,0,0,0,.91-.3l2-3.4a.75.75,0,0,0-.18-.95ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg className="gear-svg large-gear" width="125" height="125" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19.4,12.6a1.5,1.5,0,0,0,0-1.2l2.1-1.6a.75.75,0,0,0,.18-.95l-2-3.4a.75.75,0,0,0-.91-.3l-2.5,1a3.58,3.58,0,0,0-.84-.49l-.38-2.7a.75.75,0,0,0-.74-.63H9.7a.75.75,0,0,0-.74.63l-.38,2.7a3.58,3.58,0,0,0-.84.49l-2.5-1a.75.75,0,0,0-.91.3l-2,3.4a.75.75,0,0,0,.18.95l2.1,1.6a1.5,1.5,0,0,0,0,1.2l-2.1,1.6a.75.75,0,0,0-.18.95l2,3.4a.75.75,0,0,0,.91.3l2.5-1c.26.18.53.35.84.49l.38,2.7a.75.75,0,0,0,.74.63h4.6a.75.75,0,0,0,.74-.63l.38-2.7c.31-.14.58-.31.84-.49l2.5,1a.75.75,0,0,0,.91-.3l2-3.4a.75.75,0,0,0-.18-.95ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <style jsx>{`
                        .gear-svg {
                            position: absolute;
                            animation: spin 5s linear infinite;                        }

                        .small-gear {
                            animation: spin-small 5s linear infinite;
                        }
                        .large-gear {
                            animation: spin-small 10s linear infinite;
                            position: relative;
                            top: 40px; // adjust as needed
                            left: 70px; // adjust as needed
                            animation-direction: reverse; /* Gira en la dirección opuesta */

                        }

                        @keyframes spin-small {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                       
                         `}</style>
                </div>
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
        case 'international':
            svg =
                (
                    <div class="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" fill="none">
                        <path d="M7.9935 1.33331C4.3135 1.33331 1.3335 4.31998 1.3335 7.99998C1.3335 11.68 4.3135 14.6666 7.9935 14.6666C11.6802 14.6666 14.6668 11.68 14.6668 7.99998C14.6668 4.31998 11.6802 1.33331 7.9935 1.33331ZM12.6135 5.33331H10.6468C10.4335 4.49998 10.1268 3.69998 9.72683 2.95998C10.9535 3.37998 11.9735 4.23331 12.6135 5.33331ZM8.00016 2.69331C8.5535 3.49331 8.98683 4.37998 9.2735 5.33331H6.72683C7.0135 4.37998 7.44683 3.49331 8.00016 2.69331ZM2.84016 9.33331C2.7335 8.90665 2.66683 8.45998 2.66683 7.99998C2.66683 7.53998 2.7335 7.09331 2.84016 6.66665H5.0935C5.04016 7.10665 5.00016 7.54665 5.00016 7.99998C5.00016 8.45331 5.04016 8.89331 5.0935 9.33331H2.84016ZM3.38683 10.6666H5.3535C5.56683 11.5 5.8735 12.3 6.2735 13.04C5.04683 12.62 4.02683 11.7733 3.38683 10.6666ZM5.3535 5.33331H3.38683C4.02683 4.22665 5.04683 3.37998 6.2735 2.95998C5.8735 3.69998 5.56683 4.49998 5.3535 5.33331ZM8.00016 13.3066C7.44683 12.5066 7.0135 11.62 6.72683 10.6666H9.2735C8.98683 11.62 8.5535 12.5066 8.00016 13.3066ZM9.56016 9.33331H6.44016C6.38016 8.89331 6.3335 8.45331 6.3335 7.99998C6.3335 7.54665 6.38016 7.09998 6.44016 6.66665H9.56016C9.62016 7.09998 9.66683 7.54665 9.66683 7.99998C9.66683 8.45331 9.62016 8.89331 9.56016 9.33331ZM9.72683 13.04C10.1268 12.3 10.4335 11.5 10.6468 10.6666H12.6135C11.9735 11.7666 10.9535 12.62 9.72683 13.04ZM10.9068 9.33331C10.9602 8.89331 11.0002 8.45331 11.0002 7.99998C11.0002 7.54665 10.9602 7.10665 10.9068 6.66665H13.1602C13.2668 7.09331 13.3335 7.53998 13.3335 7.99998C13.3335 8.45998 13.2668 8.90665 13.1602 9.33331H10.9068Z" fill="white"></path>
                    </svg></div>
                );
            break;
        case 'settings':
            const isTool3 = props.isTool || false
            const backgroundColor = props.backGroundColor || "#2c2c2c"
            svg =
                (
                    <div className={`${isTool3 ? 'rounded-keyboard-bg' : ''}`}>

                        <svg width="16" height="16" style={{ backgroundColor: backgroundColor, marginLeft: `${isTool3 ? '' : '5px'}` }} viewBox="0 0 24 24" fill="#2c2c2c" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="12" r="2" fill="white" />
                            <circle cx="12" cy="12" r="2" fill="white" />
                            <circle cx="19" cy="12" r="2" fill="white" />
                        </svg>
                    </div>

                )
            break;

        case 'angleLeft':
            svg =
                (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M16 6L10 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                );
            break;
        case 'collapse':
            svg =
                (

                    <div className='rounded-green-bg'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 12H12M12 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 8V12M12 12V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>

                );
            break;
        case 'expand':
            svg =
                (
                    <div className='rounded-green-bg'>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M18 12H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 6V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 18V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>



                    </div>
                );
            break;
        case 'plus':
            svg = (
                <div className='rounded-keyboard-bg' style={{ backgroundColor: "white" }}>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E0A900" style={{ backGroundColor: "#E0A900" }}>
                        <path d="M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
            );
            break;
        case 'plagiarism':
            svg = (
                <div className='rounded-keyboard-bg'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="12" height="18" fill="white" stroke="black"></rect>

                        <line x1="4" y1="6" x2="14" y2="6" stroke="black"></line>
                        <line x1="4" y1="9" x2="14" y2="9" stroke="black"></line>
                        <line x1="4" y1="12" x2="14" y2="12" stroke="black"></line>

                        <circle cx="19" cy="7" r="5" stroke="black" className="yellow-fill" fill="white"></circle>
                        <line x1="21" y1="10" x2="24" y2="13" stroke="white"></line>
                    </svg>


                </div>
            );
            break;

        case 'send':
            svg = (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2,21 L22,12 L2,3 L2,10 L17,12 L2,14 L2,21" fill="white"></path>
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
            const isCompiling = props.isCompiling || false;
            svg = (
                <div className={`rounded-green-bg ${disabled ? 'disabled' : ''}`}>
                    {!isCompiling ? (<svg viewBox="0 0 24 24" width="22" height="22" className={`yellow-fill ${disabled ? 'disabled' : ''}`}>
                        <path d="M7 2v11h3v9l7-12h-4l4-8z"></path>
                    </svg>) :
                        <div className="spin" />}
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
        <div  {...props} >{svg}</div>
    )
}
