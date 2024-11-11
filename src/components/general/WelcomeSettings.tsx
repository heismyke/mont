const WelcomeSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-600 mb-1">
          Welcome Page Title
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          defaultValue="Share a testimonial!"
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">
          Introductory Message
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          defaultValue={`Do you love using our product? We'd love to hear about it!
            `}
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Button Text</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          defaultValue="Record a video"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-1">Button Style</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
          <option>Default</option>
          <option>Minimal</option>
          <option>Outline</option>
        </select>
      </div>
    </div>
  );
};

export default WelcomeSettings;
