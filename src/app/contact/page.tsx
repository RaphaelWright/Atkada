'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CalendarDaysIcon,
  UserIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone Number',
      content: '+233 302 961 684',
      subtitle: 'Call us anytime',
      action: 'tel:+233302961684',
      actionText: 'Call Now'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Address',
      content: 'info@atkadaghana.com',
      subtitle: 'Get a response within 24 hours',
      action: 'mailto:info@atkadaghana.com',
      actionText: 'Send Email'
    },
    {
      icon: ChatBubbleLeftIcon,
      title: 'WhatsApp',
      content: '+233 302 961 684',
      subtitle: 'Chat with us instantly',
      action: 'https://wa.me/233302961684',
      actionText: 'Start Chat'
    },
    {
      icon: MapPinIcon,
      title: 'Office Location',
      content: 'Darkuman, Accra, Ghana',
      subtitle: 'Visit us for consultations',
      action: '#map',
      actionText: 'View Map'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const interestOptions = [
    { value: '', label: 'Select your interest' },
    { value: 'land-purchase', label: 'Land Purchase' },
    { value: 'real-estate-development', label: 'Real Estate Development' },
    { value: 'rental-property', label: 'Rental Property' },
    { value: 'site-visit', label: 'Schedule Site Visit' },
    { value: 'investment-consultation', label: 'Investment Consultation' },
    { value: 'other', label: 'Other' }
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8">
              Ready to secure your future? Get in touch with our team for personalized assistance 
              with land purchases, real estate development, or rental properties.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="tel:+233302961684"
                  className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors duration-300"
                >
                  <PhoneIcon className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">Call Now</div>
                  <div className="text-sm opacity-90">+233 302 961 684</div>
                </a>
                <a
                  href="https://wa.me/233302961684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors duration-300"
                >
                  <ChatBubbleLeftIcon className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm opacity-90">Instant Chat</div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to contact us. We're here to help you with all your real estate needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-atkada-red mb-2">{info.title}</h3>
                <p className="text-lg text-gray-800 font-semibold mb-2">{info.content}</p>
                <p className="text-gray-600 mb-6">{info.subtitle}</p>
                <a
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn-primary w-full"
                >
                  {info.actionText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section ref={formRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-3xl font-bold font-heading text-atkada-red mb-6">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with personalized assistance.
                </p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                      <p className="text-green-600">We'll contact you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atkada-gold focus:border-transparent transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atkada-gold focus:border-transparent transition-colors duration-300"
                        placeholder="+233 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atkada-gold focus:border-transparent transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atkada-gold focus:border-transparent transition-colors duration-300"
                    >
                      {interestOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atkada-gold focus:border-transparent transition-colors duration-300 resize-vertical"
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <EnvelopeIcon className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Office Hours and Additional Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold font-heading text-atkada-red mb-6 flex items-center">
                  <ClockIcon className="h-6 w-6 mr-3" />
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-atkada-red font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-atkada-red to-atkada-gold rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold font-heading mb-4 flex items-center">
                  <CalendarDaysIcon className="h-6 w-6 mr-3" />
                  Book Your Free Site Visit
                </h3>
                <p className="mb-6 opacity-90">
                  Experience our properties firsthand with a complimentary guided tour. 
                  See the quality and potential of your future investment.
                </p>
                <a
                  href="tel:+233302961684"
                  className="bg-white text-atkada-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Schedule Now</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="section-padding" id="map">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Find Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our headquarters in Darkuman, Accra for consultations, documentation, 
              and to discuss your real estate needs in person.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl h-96 overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7267896434257!2d-0.2317!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDE0JzUxLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890"
              title="Atkada Company Office Location - Darkuman, Accra"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-atkada-red to-atkada-gold py-16">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Don't Wait - Start Your Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              The best time to invest in your future was yesterday. The second best time is today. 
              Contact us now and take the first step towards securing your dream property.
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
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
