const WelcomeSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Heading
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          defaultValue="Share a testimonial!"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          defaultValue="Do you love using our product? We'd love to hear about it!"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Button Style
        </label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <option>Default</option>
          <option>Minimal</option>
          <option>Outline</option>
        </select>
      </div>
    </div>
  );
};

export default WelcomeSettings; 