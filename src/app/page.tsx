'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheckIcon,
  CreditCardIcon,
  HomeIcon,
  StarIcon,
  PlayIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  TruckIcon,
  CubeIcon
} from '@heroicons/react/24/outline'
import React from 'react'

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [videoRef, videoInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Litigation-Free Lands',
      description: 'All our properties come with clean, registered titles ensuring complete peace of mind for your investment.',
    },
    {
      icon: CreditCardIcon,
      title: 'Flexible Payments',
      description: 'Spread your payments over up to 3 years with our convenient and flexible payment plans.',
    },
    {
      icon: HomeIcon,
      title: 'Ready-to-Build Plots',
      description: 'Naturally leveled plots with access to electricity, water, and well-planned road networks.',
    },
    {
      icon: StarIcon,
      title: 'Trusted Rentals & Real Estate',
      description: 'Quality rental properties and expertly developed real estate projects across prime locations.',
    },
    {
      icon: CubeIcon,
      title: 'Construction Services',
      description: 'Complete construction support with building materials supply and earth moving equipment rental with skilled operators.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Mensah',
      role: 'Property Owner',
      content: 'Atkada Company delivered exactly what they promised. My plot in Tsopoli is perfect and the documentation process was seamless.',
      rating: 5,
    },
    {
      name: 'Kwame Asante',
      role: 'Real Estate Investor',
      content: 'I\'ve purchased three plots through Atkada. Their transparency and professionalism make them my go-to for land investments.',
      rating: 5,
    },
    {
      name: 'Grace Osei',
      role: 'Homeowner',
      content: 'The rental property I found through Atkada exceeded my expectations. Great location and excellent service throughout.',
      rating: 5,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/bg.jpg"
          alt="Atkada Company Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-balance leading-tight">
              Secure Your Future with{' '}
              <span className="text-atkada-red">Atkada Company Limited</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-balance max-w-4xl mx-auto opacity-90">
              Trusted land sales, real estate, and rentals in Ghana
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/land-sales"
              className="bg-atkada-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-atkada-red transform hover:scale-105 transition-all duration-300"
            >
              View Plots
            </Link>
            <Link
              href="/rooms"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-atkada-red transform hover:scale-105 transition-all duration-300"
            >
              Find a Room
            </Link>
            <a
              href="tel:+233302961684"
              className="bg-white text-atkada-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Schedule Site Visit
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={featuresRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Why Choose Atkada Company?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making land ownership and quality housing accessible to every Ghanaian 
              through trusted service and flexible solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-atkada-red mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
                About Atkada Company Limited
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a family-driven company built on integrity and the mission to provide secure housing 
                solutions for every Ghanaian. Our commitment to transparency and customer satisfaction has 
                made us a trusted name in Ghana's real estate sector.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-atkada-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-atkada-red">Family-Driven Values</h4>
                    <p className="text-gray-600">Built on trust, integrity, and genuine care for our customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-atkada-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-atkada-red">Proven Track Record</h4>
                    <p className="text-gray-600">Years of successful property transactions and satisfied customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-atkada-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-atkada-red">Comprehensive Service</h4>
                    <p className="text-gray-600">From land sales to rentals and real estate development</p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className=" rounded-2xl p-8 h-96 flex items-center justify-center">
                    <Image
                    src="/assets/about.jpg"
                    alt="About Atkada Company Limited"
                    fill
                    className="object-cover rounded-2xl" 
                    priority
                    sizes="100vw"
                    quality={90}
                  />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoRef} className="section-padding bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              See Our Properties in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a virtual tour of our premium locations and see why thousands choose Atkada Company for their property needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={videoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Local Video Player */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                controls 
                className="w-full aspect-video rounded-2xl object-cover"
                poster="/assets/video-thumbnail.jpg"
              >
                <source src="/assets/drone.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Alternative: Video with Thumbnail Overlay */}
            {/* Uncomment this section if you prefer a custom play button overlay
            <div className="relative">
              <iframe
                id="droneVideo"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&enablejsapi=1"
                title="Atkada Company - Drone Footage Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video rounded-2xl"
                style={{ display: 'none' }}
              ></iframe>
              
              <div 
                className="bg-gradient-to-br from-atkada-red/30 to-atkada-gold/30 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:from-atkada-red/40 hover:to-atkada-gold/40 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const iframe = document.getElementById('droneVideo')
                  const overlay = event.target.closest('div')
                  iframe.style.display = 'block'
                  overlay.style.display = 'none'
                }}
              >
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors duration-300">
                    <PlayIcon className="h-10 w-10 ml-1" />
                  </div>
                  <div className="text-2xl font-bold mb-2">DRONE FOOTAGE</div>
                  <div className="text-lg">Watch Our Properties</div>
                  <div className="text-sm mt-2 opacity-80">Click to play drone tour</div>
                </div>
              </div>
            </div>
            */}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Atkada Company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-atkada-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-atkada-red">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="bg-gradient-to-r from-atkada-red to-atkada-gold py-16">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you're looking for land to build your dream home, a rental property, or an investment opportunity, 
              we're here to help you secure your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233302961684"
                className="bg-white text-atkada-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-6 w-6" />
                <span>Call Now: +233 302 961 684</span>
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-atkada-red transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
