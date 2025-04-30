// utils/geolocation.js
export const getIPGeolocation = async (ip) => {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    return await response.json();
  };