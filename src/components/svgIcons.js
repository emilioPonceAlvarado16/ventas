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
        case 'facebook':
            svg = (
                <div className="f-icon-regular w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <g>
                            <path d="M13 19.938C15.0173 19.6813 16.8611 18.6661 18.1568 17.0988C19.4525 15.5314 20.1027 13.5295 19.9754 11.5C19.848 9.47041 18.9527 7.56549 17.4713 6.17238C15.9898 4.77927 14.0336 4.00252 12 4C9.96396 3.99848 8.00395 4.77334 6.51934 6.16668C5.03473 7.56002 4.13724 9.46699 4.00974 11.499C3.88225 13.5311 4.53434 15.5353 5.83314 17.1033C7.13195 18.6712 8.97974 19.685 11 19.938V14H9V12H11V10.346C11 9.009 11.14 8.524 11.4 8.035C11.6561 7.55119 12.052 7.15569 12.536 6.9C12.918 6.695 13.393 6.572 14.223 6.519C14.552 6.498 14.978 6.524 15.501 6.599V8.499H15C14.083 8.499 13.704 8.542 13.478 8.663C13.3431 8.73236 13.2334 8.84215 13.164 8.977C13.044 9.203 13 9.427 13 10.345V12H15.5L15 14H13V19.938ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="currentColor"></path>
                        </g>
                        <defs>
                            <clippath id="clip0_4257_2468">
                                <rect width="24" height="24" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            );
            break;
        case 'instagram':
            svg = (
                <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">

                    <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.739 4.558 5.426 4.759 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.259 19.442 18.574 19.241 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" fill="currentColor"></path>
                </svg></div>
            );
            break;
        case 'twitter':
            svg = (
                <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <g >
                        <path d="M15.3 5.54999C14.54 5.54987 13.8103 5.84811 13.2679 6.38056C12.7256 6.913 12.4139 7.63709 12.4 8.39699L12.372 9.97199C12.3704 10.0566 12.3509 10.1398 12.3148 10.2163C12.2787 10.2928 12.2269 10.3608 12.1627 10.4159C12.0985 10.4709 12.0233 10.5118 11.9422 10.5358C11.8611 10.5597 11.7758 10.5663 11.692 10.555L10.131 10.343C8.07702 10.063 6.10902 9.11699 4.22102 7.54399C3.62302 10.854 4.79102 13.147 7.60402 14.916L9.35102 16.014C9.43403 16.0662 9.50299 16.1379 9.55187 16.2228C9.60075 16.3078 9.62806 16.4035 9.63141 16.5015C9.63477 16.5995 9.61407 16.6968 9.57111 16.7849C9.52816 16.873 9.46426 16.9493 9.38502 17.007L7.79302 18.17C8.74002 18.229 9.63902 18.187 10.385 18.039C15.103 17.097 18.24 13.547 18.24 7.69099C18.24 7.21299 17.228 5.54999 15.3 5.54999ZM10.4 8.35999C10.4175 7.39604 10.7189 6.45866 11.2666 5.66521C11.8142 4.87177 12.5838 4.25751 13.4789 3.89936C14.3741 3.54121 15.3549 3.45507 16.2988 3.65174C17.2426 3.84841 18.1074 4.31914 18.785 5.00499C19.496 4.99999 20.101 5.17999 21.454 4.35999C21.119 5.99999 20.954 6.71199 20.24 7.69099C20.24 15.333 15.543 19.049 10.777 20C7.50902 20.652 2.75702 19.581 1.39502 18.159C2.08902 18.105 4.90902 17.802 6.53902 16.609C5.16002 15.7 -0.32898 12.47 3.27802 3.78599C4.97102 5.76299 6.68802 7.10899 8.42802 7.82299C9.58602 8.29799 9.87002 8.28799 10.401 8.36099L10.4 8.35999Z" fill="currentColor"></path>
                    </g>
                    <defs>
                        <clippath id="clip0_4257_6809">
                            <rect width="24" height="24" fill="white"></rect>
                        </clippath>
                    </defs>
                </svg></div>
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
