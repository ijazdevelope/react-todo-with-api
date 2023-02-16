import React from 'react'

const Input = ({placeholder, type, name, id, className, autoComplete}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                className={className}
                autoComplete={autoComplete}
            />
        </>
    )
}

export default Input;