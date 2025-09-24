'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  WifiIcon,
  BoltIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const Rooms = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [roomsRef, roomsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const roomTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'self-contained', label: 'Self-Contained' },
    { value: 'chamber-hall', label: 'Chamber & Hall' },
    { value: 'studio', label: 'Studio Apartment' },
    { value: 'one-bedroom', label: '1 Bedroom' },
    { value: 'two-bedroom', label: '2 Bedroom' },
  ]

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'darkuman', label: 'Darkuman' },
    { value: 'tsopoli', label: 'Tsopoli' },
    { value: 'apollonia', label: 'Apollonia' },
    { value: 'afienya', label: 'Afienya' },
    { value: 'tema', label: 'Tema' },
  ]

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under GH₵500' },
    { value: '500-1000', label: 'GH₵500 - GH₵1,000' },
    { value: '1000-1500', label: 'GH₵1,000 - GH₵1,500' },
    { value: '1500+', label: 'Above GH₵1,500' },
  ]

  const rooms = [
    {
      id: 1,
      type: 'self-contained',
      title: 'Modern Self-Contained Room',
      location: 'Darkuman',
      price: 'GH₵800/month',
      features: ['Private bathroom', 'Kitchen space', 'WiFi ready', 'Security', 'Water supply'],
      image: 'room1-placeholder.jpg',
      isVideo: false,
    },
    {
      id: 2,
      type: 'chamber-hall',
      title: 'Spacious Chamber & Hall',
      location: 'Tsopoli',
      price: 'GH₵600/month',
      features: ['Separate bedroom', 'Living area', 'Shared facilities', 'Parking', 'Near transport'],
      image: 'room2-placeholder.jpg',
      isVideo: true,
    },
    {
      id: 3,
      type: 'studio',
      title: 'Executive Studio Apartment',
      location: 'Apollonia',
      price: 'GH₵1,200/month',
      features: ['Fully furnished', 'Air conditioning', 'Security service', 'Gym access', 'Pool'],
      image: 'room3-placeholder.jpg',
      isVideo: false,
    },
    {
      id: 4,
      type: 'one-bedroom',
      title: 'Cozy 1-Bedroom Apartment',
      location: 'Afienya',
      price: 'GH₵950/month',
      features: ['Separate bedroom', 'Kitchen', 'Balcony', 'Parking', 'Generator backup'],
      image: 'room4-placeholder.jpg',
      isVideo: false,
    },
    {
      id: 5,
      type: 'self-contained',
      title: 'Budget Self-Contained',
      location: 'Tema',
      price: 'GH₵450/month',
      features: ['Private bathroom', 'Basic kitchen', 'Water', 'Electricity', 'Security'],
      image: 'room5-placeholder.jpg',
      isVideo: false,
    },
    {
      id: 6,
      type: 'two-bedroom',
      title: 'Family 2-Bedroom Unit',
      location: 'Darkuman',
      price: 'GH₵1,400/month',
      features: ['2 bedrooms', 'Living room', 'Kitchen', 'Parking', 'Child-friendly'],
      image: 'room6-placeholder.jpg',
      isVideo: true,
    },
  ]

  const filteredRooms = rooms.filter(room => {
    const typeMatch = selectedType === 'all' || room.type === selectedType
    const locationMatch = selectedLocation === 'all' || room.location.toLowerCase() === selectedLocation
    
    let priceMatch = true
    if (priceRange !== 'all') {
      const price = parseInt(room.price.replace(/[^\d]/g, ''))
      switch (priceRange) {
        case '0-500':
          priceMatch = price < 500
          break
        case '500-1000':
          priceMatch = price >= 500 && price <= 1000
          break
        case '1000-1500':
          priceMatch = price >= 1000 && price <= 1500
          break
        case '1500+':
          priceMatch = price > 1500
          break
      }
    }
    
    return typeMatch && locationMatch && priceMatch
  })

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
              Available Rooms for Rent
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8">
              Browse our self-contained units and chamber-and-hall options. 
              Call to schedule a viewing today.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Available Units</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm opacity-90">Locations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Verified</div>
                </div>
              </div>
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
              <AdjustmentsHorizontalIcon className="h-6 w-6" />
              <span className="font-semibold">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4 flex-1">
              {/* Room Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-atkada-gold focus:border-transparent"
              >
                {roomTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-atkada-gold focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location.value} value={location.value}>{location.label}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-atkada-gold focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            <div className="text-gray-600">
              <span className="font-medium">{filteredRooms.length}</span> rooms found
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section ref={roomsRef} className="section-padding">
        <div className="container-custom">
          {filteredRooms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <MagnifyingGlassIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No rooms found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more options.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={roomsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  {/* Image/Video Section */}
                  <div className="h-64 bg-gradient-to-br from-atkada-red/20 to-atkada-gold/20 flex items-center justify-center relative">
                    <div className="text-center text-atkada-red/60">
                      {room.isVideo ? (
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      ) : (
                        <HomeIcon className="h-16 w-16 mx-auto mb-2" />
                      )}
                      <div className="text-sm font-medium">{room.isVideo ? 'VIDEO' : 'PHOTO'}</div>
                      <div className="text-xs">PLACEHOLDER</div>
                    </div>
                    <div className="absolute inset-0 bg-atkada-red/0 group-hover:bg-atkada-red/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-atkada-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {room.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-atkada-red mb-2">{room.title}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPinIcon className="h-4 w-4 mr-2 text-atkada-gold" />
                      <span>{room.location}</span>
                    </div>

                    <div className="flex items-center text-atkada-red font-bold text-lg mb-4">
                      <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                      <span>{room.price}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {room.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <div className="w-2 h-2 bg-atkada-gold rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="tel:+233302961684"
                      className="w-full bg-atkada-gold text-white py-3 rounded-lg font-semibold hover:bg-atkada-red transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      <span>Call for Viewing</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              What Our Rentals Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our rental properties come with essential amenities and services to ensure comfortable living.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: WifiIcon, title: 'WiFi Ready', desc: 'Internet connectivity' },
              { icon: BoltIcon, title: 'Electricity', desc: 'Reliable power supply' },
              { icon: HomeIcon, title: 'Water Supply', desc: 'Clean running water' },
              { icon: ShieldCheckIcon, title: 'Security', desc: '24/7 security service' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-heading text-atkada-red mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-atkada-red to-atkada-gold py-16">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Found Your Perfect Room?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us today to schedule a viewing or get more information about any of our available rental properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233302961684"
                className="bg-white text-atkada-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-6 w-6" />
                <span>Call: +233 302 961 684</span>
              </a>
              <a
                href="https://wa.me/233302961684"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-atkada-red transform hover:scale-105 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Rooms
