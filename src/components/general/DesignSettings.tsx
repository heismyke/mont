const DesignSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Logo</label>
        <input type="file" accept="image/*" className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Primary Color</label>
        <input type="color" className="w-full h-10" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Background Color
        </label>
        <input type="color" className="w-full h-10" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Font Family</label>
        <select className="w-full p-2 border rounded">
          <option>Inter</option>
          <option>Roboto</option>
          <option>Open Sans</option>
        </select>
      </div>
    </div>
  );
};

export default DesignSettings;
