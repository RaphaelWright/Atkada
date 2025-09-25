'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import {
  TruckIcon,
  CubeIcon,
  ScaleIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  CogIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

const ConstructionServices = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [materialsRef, materialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [equipmentRef, equipmentInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const materials = [
    {
      icon: CubeIcon,
      title: 'Quarry Stones',
      description: 'High-quality quarry stones in various sizes for construction and landscaping projects.',
      specifications: ['0.5 inch chips', '0.75 inch stones', '1.5 inch stones', 'Custom sizes available'],
      priceRange: 'From GH₵ 80 per ton'
    },
    {
      icon: ScaleIcon,
      title: 'Building Sand',
      description: 'Premium grade building sand suitable for all construction needs including plastering and block laying.',
      specifications: ['River sand', 'Washed sand', 'Fine sand', 'Coarse sand'],
      priceRange: 'From GH₵ 120 per ton'
    },
    {
      icon: TruckIcon,
      title: 'Gravels (Earth)',
      description: 'Various grades of gravels and earth materials for foundations, road construction, and landscaping.',
      specifications: ['Foundation gravels', 'Road base gravels', 'Drainage gravels', 'Decorative gravels'],
      priceRange: 'From GH₵ 60 per ton'
    }
  ]

  const equipment = [
    {
      icon: BuildingOffice2Icon,
      title: 'Motor Grader',
      description: 'Professional motor graders for road construction, land leveling, and fine grading operations.',
      specifications: [
        'Blade width: 12-14 feet',
        'Engine: 150-200 HP',
        'Skilled operator included',
        'GPS system available'
      ],
      dailyRate: 'GH₵ 1,200 - 1,500',
      monthlyRate: 'GH₵ 25,000 - 30,000',
      applications: ['Road construction', 'Land leveling', 'Drainage work', 'Fine grading']
    },
    {
      icon: TruckIcon,
      title: 'Bulldozer',
      description: 'Heavy-duty bulldozers for earthmoving, site clearing, and major construction projects.',
      specifications: [
        'Operating weight: 15-25 tons',
        'Engine: 200-300 HP',
        'Track or wheel options',
        'Various blade configurations'
      ],
      dailyRate: 'GH₵ 1,500 - 2,000',
      monthlyRate: 'GH₵ 35,000 - 45,000',
      applications: ['Site clearing', 'Earthmoving', 'Demolition', 'Land preparation']
    },
    {
      icon: CogIcon,
      title: 'Payloader (Wheel Loader)',
      description: 'Versatile wheel loaders for material handling, loading, and general construction tasks.',
      specifications: [
        'Bucket capacity: 2-4 cubic yards',
        'Engine: 100-180 HP',
        'Quick-attach system',
        'All-terrain capability'
      ],
      dailyRate: 'GH₵ 800 - 1,200',
      monthlyRate: 'GH₵ 18,000 - 25,000',
      applications: ['Material loading', 'Excavation support', 'Site cleanup', 'Snow removal']
    }
  ]

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assured',
      description: 'All materials and equipment undergo rigorous testing and maintenance to meet industry standards.'
    },
    {
      icon: TruckIcon,
      title: 'Reliable Delivery',
      description: 'Timely delivery of materials and equipment with our fleet of trucks across Greater Accra.'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Skilled Operators',
      description: 'Experienced and certified operators included with equipment rental for safe operation.'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Terms',
      description: 'Daily, weekly, and monthly options for both materials supply and equipment rental.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Discuss your project requirements for materials and equipment with our experts.'
    },
    {
      step: '02',
      title: 'Custom Quote',
      description: 'Receive detailed pricing for materials, equipment, and delivery based on your needs.'
    },
    {
      step: '03',
      title: 'Quality & Delivery',
      description: 'Professional delivery of materials and equipment setup with operator briefing.'
    },
    {
      step: '04',
      title: 'Project Support',
      description: 'Ongoing support throughout your project with maintenance and additional supplies.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-atkada-red via-atkada-red/90 to-atkada-gold py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Construction Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Complete construction support with premium building materials supply and professional earth moving equipment rental
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-atkada-gold text-atkada-red font-semibold rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
              >
                Get Quote Now
                <PhoneIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#materials"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-atkada-red transition-colors duration-300"
              >
                View Services
                <CubeIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Building Materials Section */}
      <section id="materials" ref={materialsRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={materialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Building Materials Supply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality quarry stones, building sand, and gravels delivered to your construction site 
              with consistent quality and competitive pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 30 }}
                animate={materialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-atkada-red/80 to-atkada-gold/80 flex items-center justify-center">
                    <material.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-atkada-red mb-4">{material.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{material.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-atkada-red mb-3">Available Specifications:</h4>
                    <ul className="space-y-2">
                      {material.specifications.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-atkada-gold mr-2 flex-shrink-0" />
                          <span className="text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-atkada-gold">{material.priceRange}</span>
                    <Link
                      href="/contact"
                      className="bg-atkada-red text-white px-6 py-2 rounded-full hover:bg-atkada-gold transition-colors duration-300"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Rental Section */}
      <section ref={equipmentRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={equipmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Equipment Rental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional earth moving equipment with experienced operators 
              to handle any construction or earthworks project efficiently.
            </p>
          </motion.div>

          <div className="space-y-12">
            {equipment.map((machine, index) => (
              <motion.div
                key={machine.title}
                initial={{ opacity: 0, y: 30 }}
                animate={equipmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-2xl flex items-center justify-center mr-4">
                        <machine.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold font-heading text-atkada-red">{machine.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{machine.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-atkada-red mb-3 text-lg">Specifications:</h4>
                      <ul className="space-y-2">
                        {machine.specifications.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-center text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-atkada-gold mr-2 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-atkada-red mb-3 text-lg">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {machine.applications.map((app, appIndex) => (
                          <span
                            key={appIndex}
                            className="bg-atkada-gold/10 text-atkada-red px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="mb-4 sm:mb-0">
                        <p className="text-sm text-gray-500">Daily Rate</p>
                        <p className="text-xl font-bold text-atkada-gold">{machine.dailyRate}</p>
                        <p className="text-sm text-gray-500 mt-1">Monthly: {machine.monthlyRate}</p>
                      </div>
                      <Link
                        href="/contact"
                        className="bg-atkada-red text-white px-6 py-3 rounded-full hover:bg-atkada-gold transition-colors duration-300 text-center"
                      >
                        Rent This Equipment
                      </Link>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 relative h-64 lg:h-auto bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-atkada-red/80 to-atkada-gold/80 flex items-center justify-center">
                      <machine.icon className="h-24 w-24 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Why Choose Our Construction Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction support with quality materials and professional equipment for your project success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Process Section */}
      <section ref={processRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              How We Support Your Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From materials to machinery - we make construction services simple and comprehensive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-atkada-red mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-atkada-red to-atkada-gold">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Build Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get comprehensive construction services with quality materials and professional equipment. Contact us for a custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-atkada-red font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Request Quote
                <PhoneIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:+233302961684"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-atkada-red transition-colors duration-300"
              >
                Call Now: +233 302 961 684
                <PhoneIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ConstructionServices
