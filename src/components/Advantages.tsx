
import React from 'react';
import { Smartphone, Globe, UserCheck } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <Smartphone size={48} className="text-[#44646f]" />,
      title: "Ease of Access",
      description: "Access government services from anywhere, anytime. No need to visit offices or stand in long queues."
    },
    {
      icon: <Globe size={48} className="text-[#44646f]" />,
      title: "Multilingual Support",
      description: "Get help in Telugu and English. Speak or type in your preferred language for better understanding."
    },
    {
      icon: <UserCheck size={48} className="text-[#44646f]" />,
      title: "Personalized Guidance",
      description: "Receive step-by-step guidance tailored to your specific needs and document requirements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#e1dbd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3c392b] mb-4">
            Why Choose SmartTalk?
          </h2>
          <p className="text-lg text-[#5d5c54] max-w-2xl mx-auto">
            Designed specifically for the people of Telangana to bridge the gap between citizens and government services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#3c392b] mb-4 text-center">
                {advantage.title}
              </h3>
              <p className="text-[#5d5c54] text-center leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
