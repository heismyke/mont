import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "../ui/button";

interface VideoCarouselProps {
  videos: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrame: ReturnType<typeof requestAnimationFrame> | undefined;
    let scrollPosition = 0;

    const autoScroll = () => {
      if (carousel && "scrollHeight" in carousel && "scrollTo" in carousel) {
        scrollPosition += 1;
        if (scrollPosition >= (carousel as HTMLElement).scrollHeight / 2) {
          scrollPosition = 0;
        }
        (carousel as HTMLElement).scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    const startAutoScroll = () => {
      animationFrame = requestAnimationFrame(autoScroll);
    };

    const stopAutoScroll = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="h-[620px] w-full overflow-y-hidden scroll-smooth no-scrollbar"
    >
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const leftVideos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

  const rightVideos = ["/video4.mp4", "/video5.mp4", "/video6.mp4"];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 lg:px-16 py-16 gap-8">
      <div className="flex gap-1 w-full md:w-1/2">
        <div className="w-1/2 rounded overflow-hidden shadow-lg">
          <VideoCarousel videos={leftVideos} />
        </div>
        <div className="w-1/2 rounded overflow-hidden shadow-lg">
          <VideoCarousel videos={rightVideos} />
        </div>
      </div>

      <div className="w-full md:w-1/2 mb-8 md:mb-0 space-y-10 flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-green text-xs">TRY IT NOW !</p>
          <h2 className="text-7xl font-semibold mb-4 text-navy">
            Secure Your <br />
            <span className="">Digital Legacy</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm mb-8 pr-8 text-green"
        >
          Set up a beneficiary system for your digital assets. Ensure your funds
          are recovered and distributed according to your wishes.
        </motion.p>

        <div className="flex space-x-5 items-center">
          <Button
            className="bg-purple-700 hover:bg-purple-700 rounded-full px-6"
            size="lg"
          >
            Get Started Now
          </Button>

          <div className="space-y-1">
            <div className="flex space-x-1 items-center">
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <Star className="text-yellow-400 h-4 w-4" />
              <p className="text-green font-semibold text-sm">5.0</p>
            </div>

            <p className="text-green text-xs">Trusted by top brands</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
