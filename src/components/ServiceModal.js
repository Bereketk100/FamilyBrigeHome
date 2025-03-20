const ServiceModal = ({ isOpen, onClose, service, imageIndex }) => {
  if (!isOpen) return null;

  const getAdditionalContent = (title) => {
    const content = {
      "24/7 Care and Supervision": {
        details: "Our round-the-clock care ensures residents receive continuous support and monitoring. Our trained staff members are always available to assist with emergencies, medication administration, and daily needs. We maintain detailed care logs and implement personalized care plans for each resident.",
        benefits: [
          "Immediate response to emergencies",
          "Consistent medication management",
          "Regular health monitoring",
          "Night-time supervision"
        ]
      },
      "Daily Living Assistance": {
        details: "We provide comprehensive support for all aspects of daily living, helping residents maintain their independence while ensuring their needs are met. Our approach is person-centered, respecting each individual's preferences and routines.",
        benefits: [
          "Personal hygiene assistance",
          "Dressing and grooming support",
          "Meal assistance when needed",
          "Mobility support"
        ]
      },
      // Add similar detailed content for other services
    };
    return content[title] || {
      details: "We provide comprehensive care and support tailored to each resident's unique needs.",
      benefits: ["Personalized care", "Professional support", "Quality service", "Continuous monitoring"]
    };
  };

  const additionalContent = getAdditionalContent(service.title);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-green-600">{service.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img 
              src="/Users/bereketkibret/Desktop/Code/SecureAIWebApp copy 3/familyhomeweb/public/one.jpeg"
              alt={service.title}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Overview</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Details</h4>
              <p className="text-gray-600 leading-relaxed">{additionalContent.details}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalContent.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
