const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white md:py-16 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-1">Mont Protocol</h2>
            <p className="text-gray-400 text-sm">iDream Technologies Inc.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white text-sm">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white text-sm">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white">
                  <img
                    src="/src/assets/protocols/x.svg"
                    alt="GitHub"
                    className="w-5 h-5 "
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <img
                    src="/src/assets/protocols/discord.svg"
                    alt="Discord"
                    className="w-5 h-5 "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mont. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
