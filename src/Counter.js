import React from 'react';

const Counter = ({onChange, count}) => {
    return (
        <span>
            <i 
            className="fa fa-minus mr-2" 
            onClick={() => {
                if (count > 0) {
                    onChange(count - 1);
                }
            }}></i>
            {count}
            <i 
            className="fa fa-plus ml-2"
            onClick={() => {
                onChange(count + 1);
            }}
            ></i>
        </span>
    )
}

export default Counter;