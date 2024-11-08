const PricingPlans = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Traffic-based plans to match your growth
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[9, 19, 29].map((price, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="text-2xl font-bold mb-4">${price}</div>
            <ul className="text-gray-400 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="mt-6 w-full bg-orange-600 text-white px-6 py-2 rounded-lg">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans; 