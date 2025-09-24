'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  PhotoIcon,
  VideoCameraIcon,
  MapPinIcon,
  EyeIcon,
  PlayIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const Gallery = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'plots', label: 'Land Plots' },
    { value: 'estates', label: 'Estate Projects' },
    { value: 'rentals', label: 'Rental Properties' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'construction', label: 'Construction Progress' },
  ]

  const mediaTypes = [
    { value: 'all', label: 'All Media' },
    { value: 'photo', label: 'Photos Only' },
    { value: 'video', label: 'Videos Only' },
  ]

  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      category: 'plots',
      title: 'Tsopoli Plot Development',
      location: 'Tsopoli',
      description: 'Overview of our 70×100 ft plots with demarcated boundaries',
      thumbnail: 'tsopoli-plot-1.jpg',
    },
    {
      id: 2,
      type: 'video',
      category: 'plots',
      title: 'Tsopoli Drone Tour',
      location: 'Tsopoli',
      description: 'Aerial view showcasing the entire Tsopoli development area',
      thumbnail: 'tsopoli-drone-video.jpg',
    },
    {
      id: 3,
      type: 'photo',
      category: 'estates',
      title: 'Atkada Gardens Estate',
      location: 'Tsopoli',
      description: 'Completed residential estate with modern amenities',
      thumbnail: 'atkada-gardens-1.jpg',
    },
    {
      id: 4,
      type: 'photo',
      category: 'infrastructure',
      title: 'Road Infrastructure',
      location: 'Multiple Locations',
      description: 'Well-planned road networks across our developments',
      thumbnail: 'road-infrastructure.jpg',
    },
    {
      id: 5,
      type: 'video',
      category: 'estates',
      title: 'Golden Heights Progress',
      location: 'Apollonia',
      description: 'Construction progress of our luxury residential development',
      thumbnail: 'golden-heights-progress.jpg',
    },
    {
      id: 6,
      type: 'photo',
      category: 'rentals',
      title: 'Self-Contained Units',
      location: 'Darkuman',
      description: 'Modern self-contained rental units with private amenities',
      thumbnail: 'self-contained-units.jpg',
    },
    {
      id: 7,
      type: 'photo',
      category: 'plots',
      title: 'Apollonia Land Survey',
      location: 'Apollonia',
      description: 'Professional land surveying and plot demarcation',
      thumbnail: 'apollonia-survey.jpg',
    },
    {
      id: 8,
      type: 'video',
      category: 'infrastructure',
      title: 'Utility Installation',
      location: 'Afienya',
      description: 'Electricity and water infrastructure installation process',
      thumbnail: 'utility-installation.jpg',
    },
    {
      id: 9,
      type: 'photo',
      category: 'construction',
      title: 'Foundation Work',
      location: 'Airport City',
      description: 'Quality foundation construction using premium materials',
      thumbnail: 'foundation-work.jpg',
    },
    {
      id: 10,
      type: 'photo',
      category: 'rentals',
      title: 'Chamber & Hall Units',
      location: 'Tema',
      description: 'Spacious chamber and hall rental options',
      thumbnail: 'chamber-hall-units.jpg',
    },
    {
      id: 11,
      type: 'video',
      category: 'estates',
      title: 'Community Facilities',
      location: 'Multiple Locations',
      description: 'Recreational and community facilities in our estates',
      thumbnail: 'community-facilities.jpg',
    },
    {
      id: 12,
      type: 'photo',
      category: 'plots',
      title: 'Afienya Development',
      location: 'Afienya',
      description: 'Strategic location near Tema with excellent accessibility',
      thumbnail: 'afienya-development.jpg',
    },
  ]

  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
    const typeMatch = selectedType === 'all' || item.type === selectedType
    return categoryMatch && typeMatch
  })

  const stats = [
    { label: 'Total Properties', value: '500+', icon: PhotoIcon },
    { label: 'Video Tours', value: '25+', icon: VideoCameraIcon },
    { label: 'Locations', value: '5', icon: MapPinIcon },
    { label: 'Virtual Views', value: '10K+', icon: EyeIcon },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 bg-gradient-to-br from-atkada-red to-atkada-gold">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Gallery & Media
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8">
              Explore our comprehensive collection of photos and videos showcasing plots, estates, 
              rental properties, and development progress across all our locations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-4 items-center"
          >
            <div className="flex items-center space-x-2 text-atkada-red">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <span className="font-semibold">Browse by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4 flex-1">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-atkada-gold focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>

              {/* Media Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-atkada-gold focus:border-transparent"
              >
                {mediaTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div className="text-gray-600">
              <span className="font-medium">{filteredItems.length}</span> items found
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="section-padding">
        <div className="container-custom">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <PhotoIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No media found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more content.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
                >
                  {/* Media Thumbnail */}
                  <div className="h-48 bg-gradient-to-br from-atkada-red/20 to-atkada-gold/20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-atkada-red/60">
                      {item.type === 'video' ? (
                        <div className="relative">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto group-hover:bg-white/30 transition-colors duration-300">
                            <PlayIcon className="h-8 w-8 ml-1" />
                          </div>
                          <div className="text-sm font-medium">VIDEO</div>
                        </div>
                      ) : (
                        <div className="relative">
                          <PhotoIcon className="h-16 w-16 mx-auto mb-2" />
                          <div className="text-sm font-medium">PHOTO</div>
                        </div>
                      )}
                      <div className="text-xs mt-1">PLACEHOLDER</div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-atkada-red/0 group-hover:bg-atkada-red/10 transition-colors duration-300"></div>
                    
                    {/* Media Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.type === 'video' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-atkada-gold text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {item.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold font-heading text-atkada-red mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPinIcon className="h-4 w-4 mr-2 text-atkada-gold flex-shrink-0" />
                      <span className="text-sm">{item.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <button className="w-full text-atkada-red hover:text-atkada-gold transition-colors duration-300 font-medium text-sm flex items-center justify-center space-x-1">
                        <EyeIcon className="h-4 w-4" />
                        <span>View {item.type === 'video' ? 'Video' : 'Image'}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Featured Virtual Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a comprehensive virtual tour of our flagship development in Tsopoli, 
              showcasing the complete infrastructure and amenities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-atkada-red/30 to-atkada-gold/30 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:from-atkada-red/40 hover:to-atkada-gold/40 transition-all duration-300">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 transition-colors duration-300">
                  <PlayIcon className="h-12 w-12 ml-1" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Complete Property Showcase</h3>
                <p className="text-lg opacity-90">15-minute comprehensive tour</p>
                <div className="text-sm mt-4 opacity-80">Click to play featured video tour</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-atkada-red to-atkada-gold py-16">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Schedule Your Personal Tour
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              While our gallery gives you a great overview, nothing beats seeing our properties in person. 
              Schedule a free site visit to experience the quality and potential firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233302961684"
                className="bg-white text-atkada-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Book Site Visit</span>
              </a>
              <a
                href="https://wa.me/233302961684"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-atkada-red transform hover:scale-105 transition-all duration-300"
              >
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
