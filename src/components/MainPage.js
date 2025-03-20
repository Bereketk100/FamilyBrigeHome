import React, { useState, useRef } from 'react';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const missionRef = useRef(null);

  const scrollToSection = (ref, tabName) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };
  const services = [
    {
      title: "24/7 Care and Supervision",
      description: "Round-the-clock support and supervision from our dedicated caregivers, ensuring immediate assistance and continuous care for all residents.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    },
    {
      title: "Daily Living Assistance",
      description: "Personalized support with essential self-care tasks such as personal hygiene, grooming, dressing, and mobility assistance.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    {
      title: "Medication Management",
      description: "Professional oversight of medication schedules, documentation, and coordination with healthcare providers.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    },
    {
      title: "Behavioral Support Programs",
      description: "Individualized behavior intervention plans to reduce challenging behaviors and promote positive coping skills.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    },
    {
      title: "Mental Health and Emotional Support",
      description: "Therapeutic interventions and emotional support to address mental health challenges and build self-confidence.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    },
    {
      title: "Nutritious Meal Planning",
      description: "Customized, well-balanced meals tailored to dietary restrictions, medical conditions, and personal preferences.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    {
      title: "Transportation and Community Integration",
      description: "Transportation to appointments and community events, fostering independence and social engagement.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    },
    {
      title: "Engaging Recreational and Social Activities",
      description: "Recreational activities like arts, music therapy, and nature walks to promote social interaction and well-being.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    },
    {
      title: "Comprehensive Medical Coordination",
      description: "Coordination of medical appointments, follow-ups, and preventive care to ensure residents' health remains a priority.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    }
  ];

  const handlePhotoRequest = () => {
    scrollToSection(contactRef, 'contact');
    // Add some delay to ensure the form is mounted
    setTimeout(() => {
      const messageElement = document.getElementById('message');
      if (messageElement) {
        messageElement.value = "Hi, I am interested in learning more about Family Bridge Home and would like to request facility photos. Please share more information about your facilities and available accommodations. Thank you.";
        messageElement.focus();
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-yellow-400 to-green-600 text-gray-800">
      {/* Navigation Banner */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-green-500 to-yellow-400 shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/brige.png" alt="Logo" className="h-10 w-20" /> {/* Changed w-20 to w-32 */}
              <span className="text-lg font-bold text-white"></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection(homeRef, 'home')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'home' ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'services' ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'about' ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'contact' ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection(missionRef, 'mission')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'mission' ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
              >
                Our Mission
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-r from-green-500 to-yellow-400">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => {
                    scrollToSection(homeRef, 'home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(servicesRef, 'services');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef, 'about');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef, 'contact');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(missionRef, 'mission');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md"
                >
                  Our Mission
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <section ref={homeRef} className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-yellow-400 to-green-600">
          <div className="container mx-auto text-center relative z-10 px-4 max-w-4xl">
            {/* Logo */}
            <img src="/brige.png" alt="Logo" className="mx-auto h-16 w-64 mb-6" /> {/* Reduced from h-20 w-80 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white whitespace-nowrap">
              Family Bridge Home
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto font-light">
              Compassionate Care, Fostering Independence
            </p>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')} 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-4 px-10 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')} 
                className="bg-white hover:bg-green-50 py-4 px-10 rounded-full text-green-600 font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-green-500 hover:border-green-600"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-gradient-to-br from-yellow-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-16 text-green-600">Our Services</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-16">
            At Family Bridge Home, we provide comprehensive care services in a warm, supportive environment that feels like home. Our dedicated team ensures that each resident receives personalized attention and care that promotes their well-being and dignity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gradient-to-br from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-600">Our Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-green-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Location Icon and Address */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-green-700">Find Us</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    21024 SE Salmon St<br />
                    Gresham, OR 97030
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our home is in a vibrant and accessible neighborhood, close to essential services, parks, and shopping areas. This prime location allows residents to engage with the community while enjoying a safe, supportive living environment.
                  </p>
                  <button 
                    onClick={handlePhotoRequest}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Request Facility Photos
                  </button>
                </div>
                
                {/* Map Image instead of iframe */}
                <div className="flex-1 w-full h-64 md:h-80 rounded-xl border-2 border-green-100 overflow-hidden">
                  <img 
                    src="/photo.png" 
                    alt="Family Bridge Home Location Map" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined About Us & Executive Director Section */}
      <section ref={aboutRef} className="py-24 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-600">About Us</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* About Content */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-100 h-[600px] relative">
                <div className="sticky top-0 bg-white/80 backdrop-blur-md py-4 border-b border-green-100 z-10">
                  <h3 className="text-2xl font-bold text-green-700 text-center">Our Commitment</h3>
                </div>
                <div className="overflow-auto h-[calc(100%-4rem)] pt-4 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent">
                  <div className="space-y-6 text-gray-700">
                    <p className="leading-relaxed">
                      Family Bridge Home is dedicated to providing high-quality 24/7 care for adults with intellectual and developmental disabilities (IDD), mental health conditions, and medical needs. We take a person-centered approach, tailoring our services to meet the unique needs of each individual while promoting dignity, independence, and well-being.
                    </p>
                    <p className="leading-relaxed">
                      Our team consists of trained professionals, including behavior specialists, service coordinators, primary care physicians, and Direct Support Professionals (DSPs), who work collaboratively to ensure that residents receive the best possible care in a supportive, home-like environment.
                    </p>
                    <p className="leading-relaxed">
                      At Family Bridge Home, we strive to create a strong sense of community by fostering social connections, providing engaging recreational activities, and offering structured support plans. Our mission is to not only meet the immediate care needs of our residents but also enhance their overall quality of life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Executive Director Content */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-100 h-[600px] relative">
                <div className="sticky top-0 bg-white/80 backdrop-blur-md py-4 border-b border-green-100 z-10">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-700">Leadership</h3>
                    <div className="mt-4">
                      <p className="text-xl font-semibold text-gray-800">Kalkidan Ayele</p>
                      <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <span>Executive Director</span>
                        <a href="#contact" className="text-green-500 hover:text-green-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-auto h-[calc(100%-8rem)] pt-4 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent">
                  <div className="text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      Kalkidan Ayele is the Executive Director of Family Bridge Home, bringing a wealth of experience in residential care, behavioral support, and medical coordination for individuals with intellectual and developmental disabilities, mental health challenges, and complex medical needs. With a strong background in supervisory leadership, staff training, and individualized care planning, Kalkidan is dedicated to creating an environment where every resident receives compassionate, person-centered care that promotes independence and well-being.
                    </p>
                    <p className="leading-relaxed">
                      Before stepping into his role as Executive Director, Kalkidan served in progressive leadership positions in residential care settings, overseeing staff development, compliance, crisis management, and direct care services. His work as a Supervisor and Resident Manager at Lensa Residential Service LLC involved hiring and training employees, ensuring compliance with state regulations, and developing care strategies tailored to each resident’s needs. He also has hands-on experience in behavioral intervention, medical appointment coordination, and emergency preparedness—all essential to ensuring a safe and structured home environment.
                    </p>
                    <p className="leading-relaxed">
                      Kalkidan’s experience extends beyond the U.S.; his work as a Social Worker at Asela Rural Health Outreach in Ethiopia reflects his passion for community advocacy and healthcare accessibility, where he played a vital role in providing public health education, social support, and medical resource coordination to underserved populations.
                    </p>
                    <p className="leading-relaxed">
                      At Family Bridge Home, Kalkidan is committed to fostering a culture of dignity, respect, and empowerment for both residents and staff. His leadership is defined by continuous improvement, interdisciplinary collaboration, and an unwavering focus on enhancing the quality of life for those he serves. Under his direction, Family Bridge Home continues to be a trusted and welcoming space where individuals receive the highest standard of care and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section ref={contactRef} id="contact" className="py-24 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-16 text-green-600">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Mission Section with Enhanced Design */}
      <section ref={missionRef} className="py-24 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-green-600 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600">Building bridges to independence through compassionate care and unwavering support</p>
          </div>

          {/* Mission Statement Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-green-100 mb-16 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-400 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 text-xl text-center leading-relaxed">
              To create a nurturing and empowering environment where adults with intellectual and developmental disabilities can thrive, grow, and achieve their highest potential while receiving exceptional, person-centered care that honors their dignity and independence.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Dignity & Respect */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500 group hover:-translate-y-1 transform transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Dignity & Respect</h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600">Treating each individual with unconditional dignity and fostering an environment of mutual respect and understanding.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Person-centered approach
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Cultural sensitivity
                  </li>
                </ul>
              </div>
            </div>

            {/* Empowerment */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500 group hover:-translate-y-1 transform transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Empowerment</h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600">Empowering residents to achieve their highest potential through skill development and personal growth opportunities.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Independent living skills
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Personal goal setting
                  </li>
                </ul>
              </div>
            </div>

            {/* Quality Care */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600 group hover:-translate-y-1 transform transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Quality Care</h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600">Delivering exceptional, comprehensive care through professional expertise and evidence-based practices.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    24/7 professional support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Individualized care plans
                  </li>
                </ul>
              </div>
            </div>

            {/* Community Integration */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-600 group hover:-translate-y-1 transform transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Community Integration</h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600">Fostering meaningful connections and active participation in the wider community.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Social activities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Community outings
                  </li>
                </ul>
              </div>
            </div>

            {/* Innovation */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-700 group hover:-translate-y-1 transform transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600">Embracing progressive approaches and continuous improvement in residential care.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Evidence-based practices
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Modern care techniques
                  </li>
                </ul>
              </div>
            </div>

            {/* Accountability */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-700 group hover:-translate-y-1 transform transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Accountability</h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600">Maintaining the highest standards of transparency and responsibility in all our operations.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Regular quality assessments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Transparent communication
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-yellow-400 rounded-xl p-1">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We measure our success by the positive impact we make in the lives of our residents, their families, and our community. Through continuous improvement and unwavering dedication, we strive to set new standards in residential care services.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Care & Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Dedication</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">365</div>
                  <div className="text-sm text-gray-600">Days of Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* ...rest of the code... */}
    </div>
  );
};

export default MainPage;