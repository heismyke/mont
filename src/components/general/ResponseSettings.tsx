const ResponseSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">First Prompt</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter first prompt question"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Second Prompt</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter second prompt question"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableRating"
          className="mr-2"
          defaultChecked
        />
        <label htmlFor="enableRating" className="text-sm">
          Enable Rating
        </label>
      </div>
    </div>
  );
};

export default ResponseSettings;
