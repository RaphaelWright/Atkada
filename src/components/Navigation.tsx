'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHousingOpen, setIsHousingOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Land Sales', href: '/land-sales' },
    { 
      name: 'Housing', 
      isDropdown: true,
      items: [
        { name: 'Real Estate', href: '/real-estate' },
        { name: 'Rooms for Rent', href: '/rooms' }
      ]
    },
    { name: 'Construction Services', href: '/construction-services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3">
            
              <div className="flex flex-col">
                <span className="text-xl font-bold text-atkada-red font-heading">ATKADA</span>
                {/* <span className="text-sm text-gray-600 font-medium">Company Limited</span> */}
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {item.isDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsHousingOpen(true)}
                    onMouseLeave={() => setIsHousingOpen(false)}
                  >
                    <button className="text-gray-700 hover:text-atkada-red font-medium transition-colors duration-300 relative group flex items-center space-x-1">
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isHousingOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-atkada-gold group-hover:w-full transition-all duration-300"></span>
                    </button>
                    
                    <AnimatePresence>
                      {isHousingOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                        >
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-6 py-4 text-gray-700 hover:bg-atkada-red hover:text-white transition-colors duration-200 text-base font-medium"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-gray-700 hover:text-atkada-red font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-atkada-gold group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-atkada-red transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.isDropdown ? (
                      <div>
                        <div className="py-2 font-medium text-atkada-red">
                          {item.name}
                        </div>
                        <div className="ml-6 space-y-3 mt-3">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-3 px-4 text-gray-600 hover:text-atkada-red font-medium transition-colors duration-300 hover:bg-gray-50 rounded-lg"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="block py-2 text-gray-700 hover:text-atkada-red font-medium transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
