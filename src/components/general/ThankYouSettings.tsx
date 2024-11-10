const ThankYouSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Thank You Title
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter thank you title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Thank You Message
        </label>
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Enter thank you message"
        />
      </div>
    </div>
  );
};

export default ThankYouSettings;
