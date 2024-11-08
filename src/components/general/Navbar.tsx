const Navbar = () => {
  return (
    <nav className="py-4 px-16 flex justify-between items-center border-b border-gray-800">
      <div className="text-xl font-bold">Mont</div>
      <div className="flex gap-4">
        <button className="text-gray-400">Login</button>
        <button className="text-gray-400">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar; 