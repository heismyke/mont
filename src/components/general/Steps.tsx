import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const FeatureSection = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Collect & Organize",
      tag: "VIDEO FEEDBACK",
      description:
        "Easily gather authentic video feedbacks from hackathon participants and conference attendees with our User-friendly interface designed specifically for video collection.",
      image: "/src/assets/images/collect.png",
    },
    {
      title: "Edit & Transform",
      tag: "CONTENT CREATION",
      description:
        "Our team professionally edits your collected videos into engaging social media reels and comprehensive event montages that showcase your protocol's impact.",
      image: "/src/assets/images/edit.jpeg",
    },
    {
      title: "Share & Grow",
      tag: "SOCIAL IMPACT",
      description:
        "Deploy authentic, user-generated content across your social channels to build credibility and attract new users to your protocol.",
      image: "/src/assets/images/socials.png",
    },
  ];

  return (
    <section className="md:py-20 px-4 md:px-16 mt-6">
      <h2 className="text-3xl md:text-5xl font-medium text-center mb-16 max-w-3xl mx-auto">
        Your Events, Transformed Into Powerful Content
      </h2>

      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col md:flex-row items-center gap-8 mb-28 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Card */}
          <div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:mr-8" : "md:ml-8"
            }`}
          >
            <div className="space-y-4">
              <p className="text-gray-800 text-sm font-medium">{feature.tag}</p>
              <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
              <Button onClick={() => navigate("/login")}>Sign up</Button>
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
