import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface CarouselItem {
  imageFilename: string
  title: string
  description: string
  button: {
    text: string
    color: string
    bgColor: string
    link: string
  }
}

// Hard-coded carousel data
const carouselData: CarouselItem[] = [
  {
    imageFilename: 'world.jpg',
    title: 'Industry-Specific Solutions',
    description: 'Our enterprise-grade mobile workforce management application suite is built for the modern Linen and Textile Industry.',
    button: {
      text: 'Learn More',
      color: 'text-white',
      bgColor: 'bg-primary-yellow',
      link: '/mlinx'
    }
  },
  {
    imageFilename: 'customer_happy.jpg', 
    title: 'Service ↑, Costs ↓',
    description: 'Our optimized field worker solutions will keep your customers happy and your costs down.',
    button: {
      text: 'Learn More',
      color: 'text-white',
      bgColor: 'bg-primary-yellow',
      link: '/services'
    }
  },
  {
    imageFilename: 'soil.jpg',
    title: 'Custom Solutions',
    description: 'We understand that every business is unique. Which is why we offer custom solutions to meet your specific needs.',
    button: {
      text: 'Our Products',
      color: 'text-white',
      bgColor: 'bg-primary-yellow',
      link: '/mlinx'
    }
  },  
  {
    imageFilename: 'uniforms.jpg',
    title: 'Be there on time, every time.',
    description: 'Our optimized routing and scheduling software ensures that your deliveries will be made efficiently and promptly.',
    button: {
      text: 'See How',
      color: 'text-white',
      bgColor: 'bg-primary-yellow',
      link: '/partners'
    }
  }
]

export const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1) // Start at 1 because of duplicate slide at beginning
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50
  
  // Create extended array with duplicates for infinite loop
  const extendedSlides = [
    carouselData[carouselData.length - 1], // Last slide at beginning
    ...carouselData,
    carouselData[0] // First slide at end
  ]

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Handle infinite loop transitions
  useEffect(() => {
    if (currentSlide === 0) {
      // At first duplicate slide, jump to last real slide
      setTimeout(() => {
        setIsTransitioning(true)
        setCurrentSlide(carouselData.length)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 700) // Wait for transition to complete
    } else if (currentSlide === extendedSlides.length - 1) {
      // At last duplicate slide, jump to first real slide
      setTimeout(() => {
        setIsTransitioning(true)
        setCurrentSlide(1)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 700) // Wait for transition to complete
    }
  }, [currentSlide, extendedSlides.length])

  const nextSlide = () => {
    if (isTransitioning) return
    setCurrentSlide((prev) => prev + 1)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setCurrentSlide((prev) => prev - 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setCurrentSlide(index + 1) // +1 because of duplicate at beginning
    setIsAutoPlaying(false)
  }

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div 
      className="relative w-full h-[100vh] lg:h-[66vh] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Carousel Images */}
      <div 
        className={`flex h-full ${isTransitioning ? '' : 'transition-transform duration-700 ease-in-out'}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {extendedSlides.map((item, index) => (
          <div key={`slide-${index}`} className="relative w-full h-full flex-shrink-0">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-80"
              style={{ 
                backgroundImage: `url('/src/assets/${item.imageFilename}')`,

              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 md:px-8 lg:px-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  {item.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto mb-6 md:mb-8">
                  {item.description}
                </p>
                {/* Call-to-Action Button */}
                <Link 
                  to={item.button.link}
                  className={`inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.button.color} ${item.button.bgColor}`}
                >
                  {item.button.text}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {carouselData.map((_, index) => {
          // Calculate active state based on current real slide
          const realSlideIndex = currentSlide === 0 ? carouselData.length - 1 : 
                                 currentSlide === extendedSlides.length - 1 ? 0 :
                                 currentSlide - 1
          
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                realSlideIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-primary-yellow transition-all duration-200 ease-linear"
          style={{ 
            width: `${(() => {
              const realSlideIndex = currentSlide === 0 ? carouselData.length - 1 : 
                                     currentSlide === extendedSlides.length - 1 ? 0 :
                                     currentSlide - 1
              return ((realSlideIndex + 1) / carouselData.length) * 100
            })()}%` 
          }}
        />
      </div>
    </div>
  )
}
