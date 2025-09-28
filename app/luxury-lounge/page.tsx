"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Sparkles,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Service {
  id: string
  name: string
  description: string
  price: string
  duration: string
  image: string
}

interface Course {
  id: string
  title: string
  description: string
  duration: string
  price: string
  level: string
  image: string
}

interface TeamMember {
  id: string
  name: string
  role: string
  experience: string
  image: string
  specialties: string[]
}

interface GalleryItem {
  id: string
  image: string
  category: string
  title: string
}

const LuxuryLoungeSalon = () => {
  // Framer Motion TS workaround for React 19 type mismatches on className
  const MotionDiv: any = motion.div;
  const MotionH1: any = motion.h1;
  const MotionP: any = motion.p;

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services: Service[] = [
    {
      id: '1',
      name: 'Premium Hair Cut & Styling',
      description: 'Expert precision cuts with personalized styling consultation',
      price: '$85',
      duration: '60 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: '2',
      name: 'Color Transformation',
      description: 'Professional coloring with premium organic products',
      price: '$150',
      duration: '120 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: '3',
      name: 'Luxury Facial Treatment',
      description: 'Rejuvenating facial with advanced skincare technology',
      price: '$120',
      duration: '90 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: '4',
      name: 'Bridal Package',
      description: 'Complete bridal makeover with hair, makeup, and nails',
      price: '$350',
      duration: '180 min',
      image: '/api/placeholder/300/200'
    }
  ]

  const courses: Course[] = [
    {
      id: '1',
      title: 'Professional Hair Styling Certification',
      description: 'Master advanced cutting techniques and modern styling methods',
      duration: '8 weeks',
      price: '$1,200',
      level: 'Intermediate',
      image: '/api/placeholder/300/200'
    },
    {
      id: '2',
      title: 'Color Theory & Application',
      description: 'Learn professional coloring techniques and color correction',
      duration: '6 weeks',
      price: '$950',
      level: 'Beginner',
      image: '/api/placeholder/300/200'
    },
    {
      id: '3',
      title: 'Advanced Skincare & Facial Treatments',
      description: 'Comprehensive training in facial treatments and skincare',
      duration: '10 weeks',
      price: '$1,500',
      level: 'Advanced',
      image: '/api/placeholder/300/200'
    }
  ]

  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Isabella Rodriguez',
      role: 'Master Stylist & Owner',
      experience: '15+ years',
      image: '/api/placeholder/250/300',
      specialties: ['Color Correction', 'Bridal Styling', 'Extensions']
    },
    {
      id: '2',
      name: 'Marcus Chen',
      role: 'Senior Hair Artist',
      experience: '12+ years',
      image: '/api/placeholder/250/300',
      specialties: ['Precision Cuts', 'Men\'s Grooming', 'Beard Styling']
    },
    {
      id: '3',
      name: 'Sophia Williams',
      role: 'Skincare Specialist',
      experience: '8+ years',
      image: '/api/placeholder/250/300',
      specialties: ['Anti-aging', 'Acne Treatment', 'Chemical Peels']
    }
  ]

  const galleryItems: GalleryItem[] = [
    { id: '1', image: '/api/placeholder/300/400', category: 'hair', title: 'Balayage Transformation' },
    { id: '2', image: '/api/placeholder/300/400', category: 'makeup', title: 'Bridal Glam' },
    { id: '3', image: '/api/placeholder/300/400', category: 'hair', title: 'Precision Bob Cut' },
    { id: '4', image: '/api/placeholder/300/400', category: 'skincare', title: 'Glowing Skin Treatment' },
    { id: '5', image: '/api/placeholder/300/400', category: 'hair', title: 'Color Correction' },
    { id: '6', image: '/api/placeholder/300/400', category: 'makeup', title: 'Evening Look' }
  ]

  const heroSlides = [
    {
      image: '/api/placeholder/1920/800',
      title: 'Luxury Redefined',
      subtitle: 'Experience the pinnacle of beauty and wellness'
    },
    {
      image: '/api/placeholder/1920/800',
      title: 'Expert Artistry',
      subtitle: 'Where skill meets creativity in perfect harmony'
    },
    {
      image: '/api/placeholder/1920/800',
      title: 'Your Beauty Journey',
      subtitle: 'Begins with us at Luxury Lounge'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const filteredGallery = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Luxury Lounge</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button>Book Appointment</Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-4 space-y-4">
                <a href="#home" className="block text-foreground hover:text-primary">Home</a>
                <a href="#services" className="block text-foreground hover:text-primary">Services</a>
                <a href="#courses" className="block text-foreground hover:text-primary">Courses</a>
                <a href="#gallery" className="block text-foreground hover:text-primary">Gallery</a>
                <a href="#team" className="block text-foreground hover:text-primary">Team</a>
                <a href="#contact" className="block text-foreground hover:text-primary">Contact</a>
                <Button className="w-full">Book Appointment</Button>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` 
 }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </MotionDiv>
        </AnimatePresence>

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <MotionH1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {heroSlides[currentSlide].title}
            </MotionH1>
            <MotionP 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              {heroSlides[currentSlide].subtitle}
            </MotionP>
            <MotionDiv
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                View Services
              </Button>
            </MotionDiv>
          </div>
        </div>

        {/* Hero Navigation */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-20"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-20"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Where Luxury Meets Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Luxury Lounge, we believe beauty is an art form. Our team of master stylists 
                and beauty experts are dedicated to bringing out your natural radiance through 
                personalized treatments and cutting-edge techniques.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">5000+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Luxury salon interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-sm">Client Rating</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indulge in our comprehensive range of beauty and wellness services, 
              each designed to enhance your natural beauty and boost your confidence.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <MotionDiv
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                    <Button className="w-full">Book Service</Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Professional Training Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Launch your beauty career with our comprehensive training programs. 
              Learn from industry experts and gain hands-on experience.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <MotionDiv
                key={course.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {course.level}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Investment:</span>
                        <span className="font-semibold text-primary">{course.price}</span>
                      </div>
                    </div>
                    <Button className="w-full">Enroll Now</Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Work & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our portfolio of transformations and see the artistry that sets us apart.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              {['all', 'hair', 'makeup', 'skincare'].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <MotionDiv
                key={item.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <Badge variant="secondary" className="mt-2 capitalize">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of beauty professionals brings years of experience 
              and artistic vision to every service.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <MotionDiv
                key={member.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
                        {member.experience}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-4">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your look? Contact us to schedule your appointment 
              or learn more about our services and courses.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service Interest
                    </label>
                    <Input placeholder="Hair styling, Color, Facial, etc." />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your beauty goals and preferred appointment time..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Visit Our Salon</h3>
                      <p className="text-muted-foreground">
                        123 Luxury Avenue<br />
                        Beverly Hills, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567<br />
                        Mon - Sat: 9:00 AM - 8:00 PM<br />
                        Sun: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@luxurylounge.com<br />
                        bookings@luxurylounge.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button size="icon" variant="outline">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">Luxury Lounge</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Where luxury meets expertise. Transform your beauty journey with us.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Hair Styling</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Color Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Facial Treatments</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bridal Packages</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Training</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Hair Styling Course</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Color Theory</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Skincare Training</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Certification Programs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Luxury Avenue, Beverly Hills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@luxurylounge.com</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Luxury Lounge. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LuxuryLoungeSalon;
