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
                <i class="fa fa-times position-absolute text-danger c-wrapper__form__field__error" aria-hidden="true"></i>
            )}
        </>
    )
}

export default Input;