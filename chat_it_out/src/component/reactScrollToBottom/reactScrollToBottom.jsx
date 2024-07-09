import React from 'react';
import PropTypes from 'prop-types';

const ReactScrollToBottom = ({ children }) => {
    return (
        <div className="scroll-to-bottom">
            {children}
        </div>
    );
};

ReactScrollToBottom.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ReactScrollToBottom;
