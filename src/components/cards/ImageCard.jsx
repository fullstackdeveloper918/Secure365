import Image from 'next/image'
import React from 'react'

const ImageCard = ({ src,
    alt,
    width ,
    height,
    className,
    layout,
    objectFit}) => {
  return (
    <>
      <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      className={className}
        />
    </>
  )
}

export default ImageCard