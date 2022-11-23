import React from 'react';

const Options = ({ item, value, ...props }) => {
    return (
        <option {...props} value={value}>
            {item}
        </option>
    );
};

export default Options;
