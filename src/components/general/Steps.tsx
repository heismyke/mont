import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const FeatureSection = () => {
  const features = [
    {
      title: "Track & Analyze",
      tag: "ARTIFICIAL INTELLIGENCE",
      description: "Seamlessly connect and aggregate data from multiple sources, providing a comprehensive view of your customer feedback landscape.",
      image: "/feature1.jpg"
    },
    {
      title: "Identify Growth",
        tag: "DATA INSIGHTS", 
      description: "Leverage advanced analytics to uncover hidden insights, trends, and opportunities within your customer feedback data.",
      image: "/feature2.jpg"
    },
    {
      title: "Take Action",
      tag: "CONTENT CREATION",
      description: "Transform insights into strategic actions, creating targeted content that resonates with your audience and drives engagement.",
      image: "/feature3.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 max-w-3xl mx-auto">
        Mont helps you understand your attendees
      </h2>
      
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
            index % 2 === 0 
              ? 'md:flex-row' 
              : 'md:flex-row-reverse'
          }`}
        >
          {/* Card */}
          <div className={`w-full md:w-1/2 ${
            index % 2 === 0 
              ? 'md:mr-8' 
              : 'md:ml-8'
          }`}>
            <div className="space-y-4">
            <p className="text-gray-800 text-sm font-medium">{feature.tag}</p>
              <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
              <Button>Sign up</Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 ">
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="w-full h-96 object-cover rounded-2xl" 
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default FeatureSection;