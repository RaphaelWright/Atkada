'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import {
  MapPinIcon,
  CheckCircleIcon,
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  HomeIcon,
  PhoneIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

const LandSales = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [locationsRef, locationsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const locations = [
    {
      name: 'Tsopoli',
      distance: '25 minutes from Tema Roundabout • 15 minutes from Central University',
      features: ['Naturally leveled terrain', 'Excellent accessibility', 'Growing residential area', 'Close to major landmarks'],
      image: 'tsopoli-placeholder.jpg',
    },
    {
      name: 'Apollonia City',
      distance: 'Premium residential development area',
      features: ['Modern infrastructure', 'Planned community', 'High appreciation potential', 'Security systems'],
      image: 'apollonia-placeholder.jpg',
    },
    {
      name: 'Afienya',
      distance: 'Strategic location near Tema',
      features: ['Commercial viability', 'Transport links', 'Growing infrastructure', 'Investment potential'],
      image: 'afienya-placeholder.jpg',
    },
    
  ]

  const keyFeatures = [
    {
      icon: ShieldCheckIcon,
      title: 'Litigation-Free Guarantee',
      description: 'All our lands come with clean, registered titles with no legal disputes or encumbrances.',
    },
    {
      icon: DocumentCheckIcon,
      title: 'Registered Title',
      description: 'Proper documentation with registered title deeds for complete peace of mind.',
    },
    {
      icon: HomeIcon,
      title: 'Ready-to-Build',
      description: 'Naturally leveled plots with access to utilities and proper road networks.',
    },
    {
      icon: CreditCardIcon,
      title: 'Flexible Payment Plans',
      description: 'Spread your payments over up to 3 years with our convenient payment options.',
    },
    {
      icon: ClockIcon,
      title: 'Quick Documentation',
      description: 'All necessary documents processed and delivered within 1-2 months.',
    },
    {
      icon: CheckCircleIcon,
      title: 'Free Site Visits',
      description: 'Complimentary site visits to help you make an informed decision.',
    },
  ]

  const amenities = [
    'Electricity access',
    'Water supply systems',
    'Demarcated roads',
    'Social amenities nearby',
    'Security provisions',
    'Drainage systems',
    'Green spaces',
    'Community facilities',
  ]

  const galleryImages = [
    { title: 'Tsopoli Development', type: 'image' },
    { title: 'Plot Survey', type: 'image' },
    { title: 'Road Infrastructure', type: 'image' },
    { title: 'Site Overview Drone Footage', type: 'video' },
    { title: 'Apollonia Layout', type: 'image' },
    { title: 'Afienya Progress', type: 'image' },
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
              Premium Land Sales
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8">
              Secure your future with litigation-free plots in Ghana's most promising locations. 
              70×100 ft plots with flexible payment plans up to 3 years.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Plot Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div>Size: <strong>70×100 ft</strong></div>
                <div>Payment: <strong>Up to 3 years</strong></div>
                <div>Title: <strong>Registered</strong></div>
                <div>Status: <strong>Litigation-free</strong></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section ref={locationsRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={locationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Prime Locations Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully selected locations across Ghana, each offering unique advantages 
              and excellent growth potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                animate={locationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-64 bg-gradient-to-br from-atkada-red/20 to-atkada-gold/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-atkada-red/60">
                    <MapPinIcon className="h-16 w-16 mx-auto mb-2" />
                    <div className="text-xl font-bold">{location.name.toUpperCase()}</div>
                    <div className="text-sm">IMAGE PLACEHOLDER</div>
                  </div>
                  <div className="absolute inset-0 bg-atkada-red/0 group-hover:bg-atkada-red/10 transition-colors duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-atkada-red mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-2 text-atkada-gold" />
                    {location.distance}
                  </p>
                  <ul className="space-y-2">
                    {location.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-atkada-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="w-full btn-primary">Learn More About {location.name}</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Why Choose Our Plots?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every plot comes with comprehensive features and guarantees to ensure your investment is secure and profitable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-atkada-red mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
                Complete Infrastructure & Amenities
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our plots come with access to essential infrastructure and are located near important social amenities, 
                making them perfect for immediate development or long-term investment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-atkada-gold flex-shrink-0" />
                    <span className="text-gray-600">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-atkada-red/10 to-atkada-gold/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-atkada-red/60">
                  <HomeIcon className="h-24 w-24 mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">INFRASTRUCTURE</div>
                  <div className="text-lg">IMAGE PLACEHOLDER</div>
                  <div className="text-sm mt-2">Roads, utilities, and amenities</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section
      <section ref={galleryRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              See Our Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our gallery of plots, infrastructure development, and completed projects across all our locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-atkada-red/20 to-atkada-gold/20 flex items-center justify-center relative">
                  <div className="text-center text-atkada-red/60">
                    {item.type === 'video' ? (
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="text-sm font-medium">{item.type.toUpperCase()}</div>
                    <div className="text-xs">PLACEHOLDER</div>
                  </div>
                  <div className="absolute inset-0 bg-atkada-red/0 group-hover:bg-atkada-red/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-atkada-red">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              Schedule Your Free Site Visit Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              See the potential of your future property with a complimentary site visit. Our team will guide you 
              through the locations and help you make an informed decision.
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
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-atkada-red transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <CalendarDaysIcon className="h-6 w-6" />
                <span>Schedule on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandSales
