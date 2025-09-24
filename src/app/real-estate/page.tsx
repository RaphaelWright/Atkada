'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  ShieldCheckIcon,
  CogIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const RealEstate = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: BuildingOffice2Icon,
      title: 'Estate Development',
      description: 'Complete residential estate planning and development with modern infrastructure and amenities.',
      features: ['Master planning', 'Infrastructure development', 'Utility installation', 'Landscaping'],
    },
    {
      icon: HomeModernIcon,
      title: 'Build-to-Suit',
      description: 'Custom home construction services tailored to your specific needs and preferences.',
      features: ['Custom design', 'Quality materials', 'Professional supervision', 'Timely delivery'],
    },
    {
      icon: CogIcon,
      title: 'Project Management',
      description: 'End-to-end project management ensuring your development is completed on time and within budget.',
      features: ['Timeline management', 'Quality control', 'Budget oversight', 'Regular updates'],
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure all developments meet international standards.',
      features: ['Material inspection', 'Construction supervision', 'Final quality checks', 'Warranty coverage'],
    },
  ]

  const projects = [
    {
      name: 'Atkada Gardens Estate',
      location: 'Tsopoli',
      status: 'Completed',
      units: '120 residential units',
      features: ['Gated community', 'Swimming pool', 'Playground', '24/7 security'],
      image: 'atkada-gardens-placeholder.jpg',
    },
    {
      name: 'Golden Heights Residences',
      location: 'Apollonia',
      status: 'In Progress',
      units: '80 luxury homes',
      features: ['Smart home features', 'Tennis court', 'Community center', 'Solar power'],
      image: 'golden-heights-placeholder.jpg',
    },
    {
      name: 'Serene Valley Homes',
      location: 'Afienya',
      status: 'Planning Phase',
      units: '150 mixed units',
      features: ['Eco-friendly design', 'Green spaces', 'Shopping complex', 'Schools nearby'],
      image: 'serene-valley-placeholder.jpg',
    },
  ]

  const buildProcess = [
    {
      step: '1',
      title: 'Consultation & Planning',
      description: 'We discuss your vision, requirements, and budget to create a comprehensive development plan.',
    },
    {
      step: '2',
      title: 'Design & Approval',
      description: 'Our architects create detailed designs and handle all necessary permits and approvals.',
    },
    {
      step: '3',
      title: 'Construction Phase',
      description: 'Professional construction with regular quality checks and progress updates.',
    },
    {
      step: '4',
      title: 'Quality Inspection',
      description: 'Thorough inspection and testing to ensure everything meets our high standards.',
    },
    {
      step: '5',
      title: 'Handover & Support',
      description: 'Final walkthrough, documentation, and ongoing support for your new property.',
    },
  ]

  const qualityFeatures = [
    'International building standards',
    'Premium construction materials',
    'Experienced construction teams',
    'Regular quality inspections',
    'Modern architectural designs',
    'Sustainable building practices',
    'Comprehensive warranties',
    'Post-completion support',
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
              Real Estate Development
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8">
              Creating exceptional residential communities and custom homes that exceed expectations. 
              From concept to completion, we deliver quality developments across Ghana.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <BuildingOffice2Icon className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Estate Development</h3>
                <p className="opacity-90">Complete residential communities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <HomeModernIcon className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Build-to-Suit</h3>
                <p className="opacity-90">Custom homes for your needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <ShieldCheckIcon className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="opacity-90">International standards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate development services covering every aspect of creating exceptional residential properties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-heading text-atkada-red mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-atkada-gold mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section ref={projectsRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Our Estate Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of residential estate developments, each designed to create thriving communities with modern amenities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-atkada-red/20 to-atkada-gold/20 flex items-center justify-center relative">
                  <div className="text-center text-atkada-red/60">
                    <BuildingOffice2Icon className="h-16 w-16 mx-auto mb-2" />
                    <div className="text-lg font-bold">{project.name.split(' ')[0].toUpperCase()}</div>
                    <div className="text-sm">IMAGE PLACEHOLDER</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-atkada-red mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <StarIcon className="h-4 w-4 mr-2 text-atkada-gold" />
                    {project.location}
                  </p>
                  <p className="text-gray-600 mb-4 font-medium">{project.units}</p>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-atkada-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full btn-secondary text-sm">View Project Details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section ref={processRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, transparent approach that ensures your development project is completed to the highest standards.
            </p>
          </motion.div>

          <div className="space-y-8">
            {buildProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold font-heading text-atkada-red mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-atkada-red to-atkada-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-atkada-red mb-6">
                Uncompromising Quality Standards
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Atkada Company Limited, quality is not negotiable. Every development project undergoes rigorous 
                quality control processes to ensure we deliver properties that exceed international standards and 
                stand the test of time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-atkada-gold flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
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
                  <ShieldCheckIcon className="h-24 w-24 mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">QUALITY ASSURANCE</div>
                  <div className="text-lg">IMAGE PLACEHOLDER</div>
                  <div className="text-sm mt-2">Construction quality and inspection</div>
                </div>
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
              Ready to Start Your Development Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you're planning a residential estate, custom home, or commercial development, our experienced team 
              is ready to bring your vision to life with exceptional quality and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233302961684"
                className="bg-white text-atkada-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-6 w-6" />
                <span>Discuss Your Project</span>
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-atkada-red transform hover:scale-105 transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RealEstate
