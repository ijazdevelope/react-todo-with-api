import React from 'react'

const Input = ({ placeholder, type, name, id, className, autoComplete, errorMsg, register }) => {
    return (
        <>
            <input
                className={`c-wrapper__form__field__input ${className && className} ${errorMsg && 'border-danger border'}`}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                autoComplete={autoComplete}
                {...(register && register(name))}
            />
            {errorMsg && (
                <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
        </>
    )
}

export default Input;