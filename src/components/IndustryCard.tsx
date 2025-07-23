import React from 'react'

interface IndustryCardProps {
  image: string
  name: string
  className: string
}

export const IndustryCard = ({ image, name, className }: IndustryCardProps) => {
  return (
    <div className={className} >
      <img src={image} alt={name} className="w-full h-28 object-cover rounded-lg" />
      <h3 className="text-sm font-bold">{name}</h3>
    </div>
  )
}
