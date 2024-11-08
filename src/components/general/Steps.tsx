const Steps = () => {
  const steps = [
    {
      title: "Track & Analyze",
      icon: "🔍",
      description: "Connect your data sources"
    },
    {
      title: "Identify Growth",
      icon: "📈",
      description: "Find opportunities in your data"
    },
    {
      title: "Take Action",
      icon: "🎯",
      description: "Implement data-driven changes"
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Find revenue opportunities in 3 steps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps; 