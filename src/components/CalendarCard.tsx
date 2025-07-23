interface CalendarCardProps {
  title: string
  date: string
  description: string
  image: string
  location: string
}

export const CalendarCard = ({ title, date, description, image, location }: CalendarCardProps) => {
  return (
    <div className="w-full lg:w-1/2 h-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-4" >
      <p className="text-sm text-gray-500">{date} | {location}</p>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-lg font-bold text-center">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  )
}
