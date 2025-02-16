import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Create a script element
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];

    // Configure the script element
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65e5e9a48d261e1b5f688118/1ho51hcmc';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    // Insert the script into the DOM
    s0.parentNode.insertBefore(s1, s0);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      s1.remove();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render anything
};

export default TawkToChat;