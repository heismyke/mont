import { motion } from "framer-motion";

const WhyUsSection = () => {
  const stats = [
    {
      number: "40%",
      description: "boost in developer onboarding from mont campaigns",
    },
    {
      number: "85%",
      description:
        "of participant feedback leads to meaningful protocol improvements",
    },
    {
      number: "100+",
      description:
        "authentic ready-to-post social content pieces per event, no effort required",
    },
  ];

  return (
    <section className="bg-gray-50 py-14 px-4 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Why Mont?
        </motion.h2>

        <p className="text-gray-700 text-center">
          Mont transforms hackathon and conference feedback into powerful social
          proof for Web3 protocols. 
        </p>
        <p className="text-gray-700 text-center mb-8 ">
         Share link. Collect video feedback. Get
          ready-to-post social content.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-8 text-center ">
              <div className="text-6xl text-gray-900 mb-4">{stat.number}</div>
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
          <button className="bg-purple-800 text-white px-10 py-3 rounded-full text-base hover:bg-purple-800 transition-colors">
            Launch Your First Campaign
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
