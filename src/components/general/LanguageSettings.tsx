const LanguageSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Default Language
        </label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Allow Language Selection
        </label>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">
            Let users choose their preferred language
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageSettings; 