const AnalyticsTool = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        The analytics tool that tells you where to focus
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-900 p-6 rounded-xl">
          {/* Replace with actual video */}
          <div className="h-[300px] bg-gray-800 rounded-xl flex items-center justify-center">
            Video Placeholder
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-400">Description of the first feature</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-400">Description of the second feature</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsTool; 