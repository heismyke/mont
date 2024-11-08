import { Heart, Video, Pen } from 'lucide-react';

interface WelcomePageProps {
  isDesktop: boolean;
}

const WelcomePage = ({ isDesktop }: WelcomePageProps) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg mx-auto ${
      isDesktop ? 'max-w-2xl' : 'w-[380px]'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <Heart className="text-purple-600 fill-purple-600" size={32} />
        <button className="text-sm text-purple-600 flex items-center">
          Collect testimonials with Senja ↗
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-3">Share a testimonial!</h2>
      <p className="text-gray-600 mb-4">
        Do you love using our product? We'd love to hear about it!
      </p>

      <ul className="list-disc text-gray-600 ml-5 mb-6">
        <li>Share your experience with a quick video or text testimonial</li>
        <li>Recording a video? Don't forget to smile 😊</li>
      </ul>

      <button className="w-full bg-purple-600 text-white rounded-lg py-3 mb-3 flex items-center justify-center gap-2">
        <Video size={20} />
        Record a video
      </button>

      <button className="w-full bg-gray-100 text-gray-700 rounded-lg py-3 flex items-center justify-center gap-2">
        <Pen size={20} />
        Write a testimonial
      </button>
    </div>
  );
};

export default WelcomePage; 