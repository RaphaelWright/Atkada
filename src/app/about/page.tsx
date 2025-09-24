'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
  HeartIcon,
  EyeIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import React from 'react'

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [officeRef, officeInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our dealings.',
    },
    {
      icon: HeartIcon,
      title: 'Family Values',
      description: 'We treat every customer as part of our extended family.',
    },
    {
      icon: UserGroupIcon,
      title: 'Customer First',
      description: 'Your satisfaction and success are our primary concerns.',
    },
    {
      icon: HomeIcon,
      title: 'Quality Assurance',
      description: 'We deliver only the highest quality properties and services.',
    },
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
              About Atkada Company Limited
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Building secure, serene communities through trusted land sales, quality real estate development, 
              and reliable rental services across Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Atkada Company Limited was born from a simple yet powerful vision: to make land ownership and 
                  quality housing accessible to every Ghanaian. As a family-driven company, we understand the 
                  importance of having a secure place to call home.
                </p>
                <p>
                  Founded on principles of integrity, transparency, and genuine care for our customers, we have 
                  grown to become one of Ghana's most trusted names in real estate. Our commitment goes beyond 
                  just selling properties – we're building communities and securing futures.
                </p>
                <p>
                  Every plot we sell, every home we develop, and every rental we facilitate is backed by our 
                  unwavering dedication to quality and customer satisfaction. We don't just sell land; we sell 
                  dreams, opportunities, and the foundation for a better tomorrow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl h-96 overflow-hidden">
                <Image
                  src="/assets/logo.jpg"
                  alt="About Atkada Company Limited"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={visionRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-full flex items-center justify-center mr-4">
                  <HeartIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-atkada-red">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                "To make land ownership and quality housing accessible to every Ghanaian through transparent, 
                flexible, and reliable real estate solutions."
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Provide litigation-free, registered land titles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Offer flexible payment plans up to 3 years</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintain transparency in all transactions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Deliver exceptional customer service</span>
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-atkada-gold to-atkada-red rounded-full flex items-center justify-center mr-4">
                  <EyeIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-atkada-red">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                "Building secure, serene communities, one trusted plot at a time, while becoming Ghana's 
                most respected real estate company."
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expand across all regions of Ghana</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develop world-class residential communities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Set industry standards for customer service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-atkada-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Create lasting value for all stakeholders</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make at Atkada Company Limited.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-atkada-red mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section ref={officeRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={officeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl h-96 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7267896434257!2d-0.2317!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDE0JzUxLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890"
                  title="Atkada Company Office Location - Darkuman, Accra"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 rounded-2xl"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={officeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our headquarters in Darkuman, Accra, serves as the central hub for all our operations. 
                We welcome you to visit us for consultations, site visit arrangements, or any inquiries 
                about our properties and services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-atkada-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-atkada-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-atkada-red mb-1">Office Address</h4>
                    <p className="text-gray-600">Darkuman, Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-atkada-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-atkada-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-atkada-red mb-1">Phone Number</h4>
                    <p className="text-gray-600">+233 302 961 684</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-atkada-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-atkada-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-atkada-red mb-1">Office Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Closed on Sundays</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="tel:+233302961684"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Call to Schedule a Visit</span>
                </a>
              </div>
            </motion.div>
          </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have secured their future with Atkada Company Limited. 
              Let us help you find your perfect property today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233302961684"
                className="bg-white text-atkada-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Call Us Now
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-atkada-red transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
