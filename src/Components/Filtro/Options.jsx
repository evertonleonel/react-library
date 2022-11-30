import React from 'react';

const Options = ({ item, value, ...props }) => {
    return (
        <option style={{ fontSize: '16px' }} {...props} value={value}>
            {item}
        </option>
    );
};

export default Options;
