import React from 'react';
import { RotatingLines, ColorRing, Dna } from 'react-loader-spinner'


const Spinner = ({ strokeColor, strokeWidth, animationDuration, width, height, visible, ariaLabel, wrapperClass, colors, size }) => {
    return (
        <>
            <Dna
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                animationDuration={animationDuration}
                width={width}
                height={height}
                visible={visible}
                ariaLabel={ariaLabel}
                wrapperClass={wrapperClass}
                colors={colors}
                size={size}
            />
        </>
    )
}

export default Spinner