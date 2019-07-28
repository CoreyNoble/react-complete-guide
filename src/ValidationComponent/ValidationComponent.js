import React from 'react';

// import './ValidationComponent.css';

const validationComponent = ( props ) => {
    if (props.textLength < 5){
      return(
        <p>Text too short</p>
      );
    } else {
      return(
        <p>Text long enough</p>
      );
    }
};

export default validationComponent;