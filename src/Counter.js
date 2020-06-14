import React, { useState } from 'react';

const Counter = () => {
    let [count, changeCount] = useState(0);
    return (
        <span>
            <i 
            className="fa fa-minus mr-2" 
            onClick={() => {
                if (count > 0) {
                    changeCount(count - 1);
                }
            }}></i>
            {count}
            <i 
            className="fa fa-plus ml-2"
            onClick={() => {
                changeCount(count + 1);
            }}
            ></i>
        </span>
    )
}

export default Counter;