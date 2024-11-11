const ThankYouSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-600 mb-1">Page Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded text-gray-800 text-sm"
          defaultValue="Thanks for leaving us feedback 🙏"
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Message</label>
        <textarea
          className="w-full p-2 border rounded text-gray-800 text-sm"
          rows={4}
          defaultValue="Thank you so much for your support! We appreciate your support and we hope you enjoy using our product."
        />
      </div>
    </div>
  );
};

export default ThankYouSettings;
