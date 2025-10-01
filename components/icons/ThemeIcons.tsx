import React from 'react';

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
    <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
    <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
    <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
    <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
    <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
    <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
    <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  </svg>
);

// Banderas para el selector de idioma
export const USAFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none" className={className}>
    <mask id="usa-a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
      <path fill="#fff" d="M0 0h20v15H0z"/>
    </mask>
    <g mask="url(#usa-a)">
      <path fill="#E31D1C" fillRule="evenodd" d="M0 0h20v15H0V0z" clipRule="evenodd"/>
      <path fill="#F7FCFF" fillRule="evenodd" d="M0 1.25V2.5h20V1.25H0zm0 2.5V5h20V3.75H0zM0 7.5V6.25h20V7.5H0zm0 1.25V10h20V8.75H0zm0 3.75v-1.25h20v1.25H0zM0 15v-1.25h20V15H0z" clipRule="evenodd"/>
      <path fill="#2E42A5" d="M0 0h11.25v8.75H0z"/>
      <path fill="#F7FCFF" fillRule="evenodd" d="m1.3 2.717.662-.461.514.37h-.29l.588.52-.2.73h-.31l-.303-.67-.257.67H.935l.589.52-.224.821.662-.461.514.37h-.29l.588.52-.2.73h-.31l-.303-.67-.257.67H.935l.589.52-.224.821.662-.461.641.461-.199-.82.515-.521H2.68l.531-.37.514.37h-.29l.588.52-.224.821.662-.461.641.461-.199-.82.515-.521H5.18l.531-.37.514.37h-.29l.588.52-.224.821.662-.461.641.461-.199-.82.515-.521H7.68l.531-.37.514.37h-.29l.588.52-.224.821.662-.461.641.461-.199-.82.515-.521h-.655l-.303-.67-.257.67H8.83l-.177-.73.515-.52H8.93l.531-.37.641.461-.199-.82.515-.521h-.655l-.303-.67-.257.67H8.83l-.177-.73.515-.52H8.93l.531-.37.641.461-.199-.82.515-.521h-.655L9.46.706l-.257.67h-.769l.589.52-.2.73h-.31l-.303-.67-.257.67H7.58l-.177-.73.515-.52h-.655L6.96.706l-.257.67h-.769l.589.52-.2.73h-.31l-.303-.67-.257.67H5.08l-.177-.73.515-.52h-.655L4.46.706l-.257.67h-.769l.589.52-.2.73h-.31l-.303-.67-.257.67H2.58l-.177-.73.515-.52h-.655L1.96.706l-.257.67H.935l.589.52-.224.821zm7.525 2.409.199-.73-.589-.52h.291l-.514-.37-.53.37h.237l-.515.52.177.73h.373l.257-.67.303.67h.31zm-1.349 0-.514-.37-.53.37h.237l-.515.52.177.73h.373l.257-.67.303.67h.31l.2-.73-.589-.52h.291zm-2.202.52-.2.73h-.31l-.303-.67-.257.67H3.83l-.177-.73.515-.52H3.93l.531-.37.514.37h-.29l.588.52zm.18-.52H5.08l-.177-.73.515-.52H5.18l.531-.37.514.37h-.29l.588.52-.2.73h-.31l-.303-.67-.257.67zm-1.63 0 .2-.73-.589-.52h.291l-.514-.37-.53.37h.237l-.515.52.177.73h.373l.257-.67.303.67h.31zm3.95-1.98-.2.73h-.31l-.303-.67-.257.67H6.33l-.177-.73.515-.52H6.43l.531-.37.514.37h-.29l.588.52zm-2.798-.52-.514-.37-.53.37h.237l-.515.52.177.73h.373l.257-.67.303.67h.31l.2-.73-.589-.52h.291z" clipRule="evenodd"/>
    </g>
  </svg>
);

export const ColombiaFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none" className={className}>
    <mask id="colombia-a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
      <path fill="#fff" d="M0 0h20v15H0z"/>
    </mask>
    <g mask="url(#colombia-a)">
      <path fill="#2E42A5" fillRule="evenodd" d="M0 0v15h20V0H0z" clipRule="evenodd"/>
      <mask id="colombia-b" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
        <path fill="#fff" fillRule="evenodd" d="M0 0v15h20V0H0z" clipRule="evenodd"/>
      </mask>
      <g fillRule="evenodd" clipRule="evenodd" mask="url(#colombia-b)">
        <path fill="#FECA00" d="M0 0v7h20V0H0z"/>
        <path fill="#E31D1C" d="M0 11v4h20v-4H0z"/>
      </g>
    </g>
  </svg>
);