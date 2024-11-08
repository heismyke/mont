const Footer = () => {
  return (
    <footer className="py-20 ">
      <div className="text-center mb-12 border-2 border-gray-800 w-fit px-10 py-20 mx-auto rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Turn data into decisions</h2>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
          Start Now
        </button>
      </div>
      <div className="flex justify-center border-t border-gray-800 py-20">
        <div className="grid md:grid-cols-4 gap-20 text-gray-400 mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-center">
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-center">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-center">
              <li>Support</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Social</h3>
            <ul className="space-y-2 text-center">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;