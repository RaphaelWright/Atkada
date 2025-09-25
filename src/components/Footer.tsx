'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Land Sales', href: '/land-sales' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'Rooms for Rent', href: '/rooms' },
    { name: 'Construction Services', href: '/construction-services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    'Land Sales',
    'Real Estate Development',
    'Construction Services',
    'Building Materials Supply',
    'Equipment Rental',
    'Property Rentals',
    'Site Visits',
    'Property Management',
    'Investment Consulting',
  ]

  const locations = [
    'Tsopoli - 25 mins from Tema',
    'Apollonia City',
    'Afienya',
    'Airport City Residential',
    'Darkuman Office',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white font-heading">Atkada</span>
                <span className="text-sm text-gray-300 font-medium">Company Limited</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Secure your future with trusted land sales, real estate development, construction services, and quality rentals in Ghana. 
              Building secure, serene communities, one trusted plot at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/233302961684"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-atkada-gold hover:bg-atkada-red rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white font-bold">W</span>
              </a>
              <a
                href="tel:+233302961684"
                className="w-10 h-10 bg-atkada-gold hover:bg-atkada-red rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@atkadaghana.com"
                className="w-10 h-10 bg-atkada-gold hover:bg-atkada-red rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold font-heading mb-6 text-atkada-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-atkada-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold font-heading mb-6 text-atkada-gold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold font-heading mb-6 text-atkada-gold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 text-atkada-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+233 302 961 684</p>
                  <p className="text-sm text-gray-400">Mon - Sat: 8AM - 6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-atkada-gold mt-1 flex-shrink-0" />
                <p className="text-gray-300">info@atkadaghana.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-atkada-gold mt-1 flex-shrink-0" />
                <p className="text-gray-300">Darkuman, Accra, Ghana</p>
              </div>
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-atkada-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Office Hours</p>
                  <p className="text-sm text-gray-400">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Atkada Company Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-atkada-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-atkada-gold transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-atkada-red to-atkada-gold py-8"
      >
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">Ready to Secure Your Future?</h3>
          <p className="text-lg mb-6 opacity-90">
            Book your free site visit today and discover your perfect plot or rental property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+233302961684"
              className="bg-white text-atkada-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Call Now: +233 302 961 684
            </a>
            <a
              href="https://wa.me/233302961684"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-atkada-red transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
