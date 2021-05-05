import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
    <span className="oops">
      oOps...
    </span>
    <span>
      Something went wrong
    </span>
    <span>
      Иut we are already working to fix it !
    </span>
  </div>
  )
};
export default ErrorIndicator;
