const Footer = () => {
  return (
    <footer className="py-20 ">
      <div className="flex justify-center border-t border-gray-800 py-20">
        <div className="grid md:grid-cols-4 gap-20 text-gray-700 mx-auto max-w-6xl">
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
