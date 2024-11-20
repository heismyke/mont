import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface VideoItemProps {
  video: string;
  event: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VideoItem: React.FC<VideoItemProps> = ({ video, event }) => {
  return (
    <div className="relative w-full h-full border-0 border-black rounded-lg overflow-hidden">
      {/* <div className="absolute top-0 left-0 right-0 bg-black text-white p-2 text-center text-sm font-bold z-10">
        {event}
      </div> */}

      <video
        src={video}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

interface VideoCarouselProps {
  videos: string[];
  events: string[];
  initialDelay?: number;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  events,
  initialDelay = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isPlaying) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 5000 + initialDelay);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentIndex, isPlaying, videos.length, initialDelay]);

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="md:h-[620px] h-[400px] w-full overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VideoItem video={videos[currentIndex]} event={events[currentIndex]} />
    </div>
  );
};

const Hero = () => {
  const leftVideos = [
    "/src/assets/video/9.mp4",
    "/src/assets/video/8.mp4",
    "/src/assets/video/4.mp4",
  ];

  const rightVideos = [
    "/src/assets/video/5.mp4",
    "/src/assets/video/6.mp4",
    "/src/assets/video/7.mp4",
  ];

  const leftEvents = [
    "ETH Denver 2024",
    "Consensus Hackathon",
    "Web3 Startup Summit",
  ];

  const rightEvents = [
    "Solana Hackathon",
    "Bitcoin Conference",
    "Blockchain Week",
  ];

  const navigate = useNavigate();

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 lg:px-16 md:py-16 py-8 gap-0 md:gap-8">
      <div className="flex gap-1 w-full md:w-2/3">
        <div className="w-1/2 rounded overflow-hidden shadow-lg">
          <VideoCarousel
            videos={leftVideos}
            events={leftEvents}
            initialDelay={0}
          />
        </div>
        <div className="w-1/2 rounded overflow-hidden shadow-lg">
          <VideoCarousel
            videos={rightVideos}
            events={rightEvents}
            initialDelay={500}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 mb-8 md:mb-0 space-y-5 md:space-y-10 flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-green text-xs">TRY IT NOW!</p>
          <h2 className="md:text-6xl text-4xl font-semibold mb-4 text-navy">
            Turn Feedback <br />
            <span className="">Into Social Gold</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm sm:text-base mb-8 pr-8 text-green"
        >
          Collect, edit, and transform your hackathon and conference attendee
          moments into powerful social content. The easiest way to showcase real
          user experiences and build protocol credibility.
        </motion.p>

        <div className="flex space-x-5 items-center">
          <Button
            className="bg-purple-700 hover:bg-purple-700 rounded-full px-6 md:py-6"
            size="lg"
            onClick={() => navigate("/form")}
          >
            Start Collecting Videos
          </Button>

          <div className="space-y-1 hidden md:block">
            <div className="flex space-x-1 items-center">
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <p className="text-green font-semibold text-sm">5.0</p>
            </div>

            <p className="text-green text-xs">
              Trusted by leading brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
