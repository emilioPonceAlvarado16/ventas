import React, { useReducer, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: ''
};

const formReducer = (state, action) => {
  if (action.type === 'UPDATE_FIELD') {
    return { ...state, [action.field]: action.value };
  }
  return state;
};

export default function Account() {

  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async function (event) {
    event.preventDefault();
    setIsLoading(false)
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };


  return (
    <div className="f-account-section">
    <div className="f-account-container-l">
      <div className="f-account-content-wrapper">
        <div className="f-margin-bottom-138">
          <h5 className="f-h5-heading">Login</h5>
        </div>
        <p className="f-paragraph-regular">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className="f-account-social-wrapper">
          <a href="/default-route" className="f-account-social-icon w-inline-block">
            <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <g>
                  <path d="M13 19.938C15.0173 19.6813 16.8611 18.6661 18.1568 17.0988C19.4525 15.5314 20.1027 13.5295 19.9754 11.5C19.848 9.47041 18.9527 7.56549 17.4713 6.17238C15.9898 4.77927 14.0336 4.00252 12 4C9.96396 3.99848 8.00395 4.77334 6.51934 6.16668C5.03473 7.56002 4.13724 9.46699 4.00974 11.499C3.88225 13.5311 4.53434 15.5353 5.83314 17.1033C7.13195 18.6712 8.97974 19.685 11 19.938V14H9V12H11V10.346C11 9.009 11.14 8.524 11.4 8.035C11.6561 7.55119 12.052 7.15569 12.536 6.9C12.918 6.695 13.393 6.572 14.223 6.519C14.552 6.498 14.978 6.524 15.501 6.599V8.499H15C14.083 8.499 13.704 8.542 13.478 8.663C13.3431 8.73236 13.2334 8.84215 13.164 8.977C13.044 9.203 13 9.427 13 10.345V12H15.5L15 14H13V19.938ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clippath id="clip0_4257_2468">
                    <rect width="24" height="24" fill="white"></rect>
                  </clippath>
                </defs>
              </svg></div>
          </a>
          <a href="/default-route" className="f-account-social-icon w-inline-block">
            <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                
                <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.739 4.558 5.426 4.759 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.259 19.442 18.574 19.241 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" fill="currentColor"></path>
              </svg></div>
          </a>
          <a href="/default-route" className="f-account-social-icon w-inline-block">
            <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none">
                <g >
                  <path d="M15.3 5.54999C14.54 5.54987 13.8103 5.84811 13.2679 6.38056C12.7256 6.913 12.4139 7.63709 12.4 8.39699L12.372 9.97199C12.3704 10.0566 12.3509 10.1398 12.3148 10.2163C12.2787 10.2928 12.2269 10.3608 12.1627 10.4159C12.0985 10.4709 12.0233 10.5118 11.9422 10.5358C11.8611 10.5597 11.7758 10.5663 11.692 10.555L10.131 10.343C8.07702 10.063 6.10902 9.11699 4.22102 7.54399C3.62302 10.854 4.79102 13.147 7.60402 14.916L9.35102 16.014C9.43403 16.0662 9.50299 16.1379 9.55187 16.2228C9.60075 16.3078 9.62806 16.4035 9.63141 16.5015C9.63477 16.5995 9.61407 16.6968 9.57111 16.7849C9.52816 16.873 9.46426 16.9493 9.38502 17.007L7.79302 18.17C8.74002 18.229 9.63902 18.187 10.385 18.039C15.103 17.097 18.24 13.547 18.24 7.69099C18.24 7.21299 17.228 5.54999 15.3 5.54999ZM10.4 8.35999C10.4175 7.39604 10.7189 6.45866 11.2666 5.66521C11.8142 4.87177 12.5838 4.25751 13.4789 3.89936C14.3741 3.54121 15.3549 3.45507 16.2988 3.65174C17.2426 3.84841 18.1074 4.31914 18.785 5.00499C19.496 4.99999 20.101 5.17999 21.454 4.35999C21.119 5.99999 20.954 6.71199 20.24 7.69099C20.24 15.333 15.543 19.049 10.777 20C7.50902 20.652 2.75702 19.581 1.39502 18.159C2.08902 18.105 4.90902 17.802 6.53902 16.609C5.16002 15.7 -0.32898 12.47 3.27802 3.78599C4.97102 5.76299 6.68802 7.10899 8.42802 7.82299C9.58602 8.29799 9.87002 8.28799 10.401 8.36099L10.4 8.35999Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clippath id="clip0_4257_6809">
                    <rect width="24" height="24" fill="white"></rect>
                  </clippath>
                </defs>
              </svg></div>
          </a>
        </div>
        <div className="f-margin-bottom-137">
          <p className="f-paragraph-small-5 f-text-color-gray-500">or use your email for registration :</p>
        </div>
        <div className="f-account-form-block w-form">
          <form id="wf-form-Sign-Up-Form" name="wf-form-Sign-Up-Form" data-name="Sign Up Form" method="get" data-wf-page-id="64c27d1872143fc4d0d34bca" data-wf-element-id="93df8944-7819-2d4d-bbe7-1a68d6877ee0">
            <div className="w-layout-grid f-account-input-grid">
              <div className="f-field-wrapper">
                <div className="f-field-label">Name</div>
                <input
                  type="text"
                  className="f-field-input w-input"
                  name="name"
                  placeholder="Your name..."
                  value={state.name}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="f-field-wrapper">
                <div className="f-field-label">Email</div>
                <input
                  type="email"
                  className="f-field-input w-input"
                  name="email"
                  placeholder="Your email..."
                  value={state.email}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="f-field-wrapper">
                <div className="f-field-label">Password</div> 
                 <input
                  type="password"
                  className="f-field-input w-input"
                  name="password"
                  placeholder="Enter a password..."
                  value={state.password}
                  onChange={handleFieldChange}
                />
              </div><label className="w-checkbox f-checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom f-checkbox"></div>
                <input 
                        type="checkbox" 
                        id="Privacy-Checkbox-03" 
                        name="Privacy-Checkbox-03" 
                        data-name="Privacy Checkbox 03" 
                         
                        style={{opacity: 0, position: "absolute", zIndex: -1}}
/>
                <span className="f-checkbox-label w-form-label" >I agree to the Terms and Privacy Policy</span>
              </label>
            </div>
            <div className="f-account-form-button">
              <button type="submit" onClick={handleSubmit} className="f-button-neutral w-button">
              {/* <div className=" spin"></div> */}
              {isLoading ? <div className=" spin"></div> : 'Ingresar'}
              </button>
              </div>
          </form>
          <div className="f-success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <p className="f-paragraph-small-5">Already have an account? <a href="/default-route" className="f-account-link">Sign in</a>
        </p>
      </div>
    </div>
    <div className="f-account-image-wrapper"><img src="images/formatmaker_logo.png" loading="lazy" sizes="(max-width: 767px) 100vw, 45vw" alt="" className="f-image-cover"/></div>
  </div>
  )
}
