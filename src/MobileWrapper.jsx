// MobileWrapper.js
import React from "react";
import "./MobileWrapper.css";

const MobileWrapper = ({ children }) => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return children;
  }

  return (
    // <div className="flex justify-center items-center min-h-screen bg-black">
    //   <div className="w-full h-full max-w-[414px] max-h-[896px] bg-white overflow-hidden shadow-lg">
    //     {children}
    //   </div>
    // </div>

    // <div className="mobile-wrapper">
    //   <div className="mobile-frame">
    //     <div className="mobile-content">{children}</div>
    //   </div>
    // </div>

    <div className="mobile-wrapper">{children}</div>
  );
};

export default MobileWrapper;
