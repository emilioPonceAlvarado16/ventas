import React, { useState } from 'react';
import SvgIcons from './svgIcons';

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="password-container">
            <input
                type={showPassword ? "text" : "password"}
                className="f-field-input w-input"
                {...props}
            />
            <button className="icon-container" onClick={togglePasswordVisibility}>
                {!showPassword ? <SvgIcons type="eyeOffIcon" /> :<SvgIcons type="eyeIcon" />}
            </button>
        </div>
    );
}

export default PasswordInput;
