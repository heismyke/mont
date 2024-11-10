const CustomerSettings = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm">Name</label>
        <input type="checkbox" defaultChecked disabled />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm">Project Name</label>
        <input type="checkbox" defaultChecked disabled />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm">Email</label>
        <input type="checkbox" defaultChecked disabled />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm">Wallet Address</label>
        <input type="checkbox" defaultChecked disabled />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm">Photo</label>
        <input type="checkbox" defaultChecked />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm">Nationality</label>
        <input type="checkbox" defaultChecked />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm">Comments</label>
        <input type="checkbox" defaultChecked />
      </div>
    </div>
  );
};

export default CustomerSettings;
