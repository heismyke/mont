import { Button } from "../ui/button";

interface LearnMoreProps {
  isDesktop: boolean;
  onNavigateNext: () => void;
}

const LearnMore = ({ onNavigateNext }: LearnMoreProps) => {
  return (
    <div className="max-w-3xl mx-auto p-5 bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-2">Mont Protocol</h1>
        <p className="text-sm text-gray-600">
          The next generation DeFi lending protocol built for institutional
          adoption Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Totam, odit. We've built a live demo of the protocol for you to test out!
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "8px" }}
          ></iframe>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={onNavigateNext}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Check Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
