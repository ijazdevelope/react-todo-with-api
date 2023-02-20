import React from 'react';

const Button = ({className, value, type, Children}) => {
    return (
        <>
            <button className={className} type={type} >{Children}</button>
        </>
    )
}

export default Button;