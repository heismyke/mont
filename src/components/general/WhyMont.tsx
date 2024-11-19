import React from "react";
import { motion } from "framer-motion";

const WhyUsSection = () => {
  const stats = [
    {
      number: "96%",
      description: "of brands improve content creation efficiency",
    },
    {
      number: "95%",
      description: "increase in audience engagement",
    },
    {
      number: "87%",
      description: "faster social media content turnaround",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Why Choose Mont?
        </motion.h2>

        <p className="text-gray-600 text-center mb-8">
          Mont empowers brands to turn customer insights into compelling social
          media content effortlessly. Our AI-driven platform transforms feedback
          into engaging stories that resonate with your audience.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 text-center "
            >
              <div className="text-6xl font-medium text-gray-900 mb-4">
                {stat.number}
              </div>
              <p className="text-gray-600 text-base">{stat.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-purple-800 text-white px-12 py-3 rounded-2xl text-lg font-medium hover:bg-purple-800 transition-colors">
            Get started now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
