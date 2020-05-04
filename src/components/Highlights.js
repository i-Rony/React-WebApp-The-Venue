import React from 'react';
import Descriptions from './Descriptions';
import Discount from './Discount';

const Highlights = () => {
    return(
        <div className="highlight_wrapper">
            <Descriptions />
            <Discount />
        </div>
    );
};

export default Highlights;