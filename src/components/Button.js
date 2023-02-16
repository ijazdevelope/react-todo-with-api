import React from 'react'

const Button = ({className, value, type}) => {
    return (
        <>
            <button className={className} type={type} >{value}</button>
        </>
    )
}

export default Button;