const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-green-100">
      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-yellow-400 rounded-full flex items-center justify-center mb-6">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-green-700">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
